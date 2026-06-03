import { useMemo, useState } from "react";

import { RequestsTable } from "../components/requests/RequestsTable";
import { ErrorState } from "../components/states/ErrorState";
import { LoadingState } from "../components/states/LoadingState";
import { useRequests } from "../hooks/useRequests";
import type { ProcurementRequest } from "../types/procurement";

type SortOption = "date-desc" | "date-asc" | "budget-desc" | "budget-asc";

export function RequestsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [status, setStatus] = useState("All");
  const [urgency, setUrgency] = useState("All");
  const [sortBy, setSortBy] = useState<SortOption>("date-desc");

  const {
    data,
    isLoading,
    error,
  } = useRequests();

  const requests: ProcurementRequest[] = data ?? [];

  const categories = useMemo(
    () => ["All", ...new Set(requests.map((request) => request.category))],
    [requests]
  );

  const statuses = useMemo(
    () => ["All", ...new Set(requests.map((request) => request.status))],
    [requests]
  );

  const urgencies = useMemo(
    () => ["All", ...new Set(requests.map((request) => request.urgency))],
    [requests]
  );

  const filteredRequests = useMemo(() => {
    return requests
      .filter((request) => {
        const searchableText = [
          request.id,
          request.department,
          request.productName,
          request.standardizedProductName,
          request.category,
          request.hospital.name,
        ]
          .join(" ")
          .toLowerCase();

        const matchesSearch = searchableText.includes(search.toLowerCase());
        const matchesCategory =
          category === "All" || request.category === category;
        const matchesStatus =
          status === "All" || request.status === status;
        const matchesUrgency =
          urgency === "All" || request.urgency === urgency;

        return (
          matchesSearch &&
          matchesCategory &&
          matchesStatus &&
          matchesUrgency
        );
      })
      .sort((a, b) => {
        if (sortBy === "date-desc") {
          return (
            new Date(b.createdDate).getTime() -
            new Date(a.createdDate).getTime()
          );
        }

        if (sortBy === "date-asc") {
          return (
            new Date(a.createdDate).getTime() -
            new Date(b.createdDate).getTime()
          );
        }

        if (sortBy === "budget-desc") {
          return b.estimatedBudget - a.estimatedBudget;
        }

        return a.estimatedBudget - b.estimatedBudget;
      });
  }, [requests, search, category, status, urgency, sortBy]);

  if (isLoading) {
    return <LoadingState />;
  }

  if (error) {
    return (
      <ErrorState message="Failed to load procurement requests." />
    );
  }

  return (
    <div>
      <header>
        <p className="text-sm font-medium uppercase tracking-wide text-teal-700">
          Procurement Requests
        </p>

        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-slate-950">
          Request management
        </h1>

        <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">
          Search, filter, and prioritize hospital procurement requests before
          supplier matching and approval.
        </p>
      </header>

      <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-5 shadow-[var(--shadow-card)]">
        <div className="grid gap-4 md:grid-cols-5">
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search requests..."
            className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-900 shadow-sm outline-none placeholder:text-slate-400 focus:border-teal-600 focus:ring-4 focus:ring-teal-100"
          />

          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-900 shadow-sm outline-none focus:border-teal-600 focus:ring-4 focus:ring-teal-100"
          >
            {categories.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>

          <select
            value={status}
            onChange={(event) => setStatus(event.target.value)}
            className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-900 shadow-sm outline-none focus:border-teal-600 focus:ring-4 focus:ring-teal-100"
          >
            {statuses.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>

          <select
            value={urgency}
            onChange={(event) => setUrgency(event.target.value)}
            className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-900 shadow-sm outline-none focus:border-teal-600 focus:ring-4 focus:ring-teal-100"
          >
            {urgencies.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>

          <select
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value as SortOption)}
            className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-900 shadow-sm outline-none focus:border-teal-600 focus:ring-4 focus:ring-teal-100"
          >
            <option value="date-desc">Newest first</option>
            <option value="date-asc">Oldest first</option>
            <option value="budget-desc">Highest budget</option>
            <option value="budget-asc">Lowest budget</option>
          </select>
        </div>
      </section>

      <section className="mt-6">
        <RequestsTable requests={filteredRequests} />
      </section>
    </div>
  );
}
