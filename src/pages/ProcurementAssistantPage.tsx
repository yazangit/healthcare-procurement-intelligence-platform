import { useState } from "react";

import { mockProcurementGroups } from "../data/mockProcurementGroups";
import { mockSuppliers } from "../data/mockSuppliers";
import { SupplierType } from "../types/procurement";
import { formatCurrency } from "../utils/formatters";

const suggestedQuestions = [
  "Which supplier gives the best price for surgical gloves?",
  "Which requests have delivery risk?",
  "Where can we save the most this month?",
  "Which products should be bundled?",
];

function getMockAnswer(question: string): string {
  const lowerQuestion = question.toLowerCase();

  if (lowerQuestion.includes("surgical gloves") || lowerQuestion.includes("best price")) {
    const gloveOffers = mockSuppliers.filter(
      (supplier) => supplier.requestId === "REQ-1001"
    );

    const cheapest = gloveOffers.reduce((best, current) =>
      current.unitPrice < best.unitPrice ? current : best
    );

    return `${cheapest.supplierName} gives the best price for surgical gloves at ${cheapest.unitPrice.toFixed(
      2
    )} EUR per unit. It is a ${cheapest.supplierType.toLowerCase()} offer and currently the strongest sourcing option.`;
  }

  if (lowerQuestion.includes("delivery risk")) {
    const riskySuppliers = mockSuppliers.filter(
      (supplier) => supplier.deliveryDays > 10
    );

    return `${riskySuppliers.length} supplier offers show delivery risk because their lead time is above ten days. The highest-risk area is ICU monitoring equipment.`;
  }

  if (lowerQuestion.includes("save") || lowerQuestion.includes("savings")) {
    const topGroup = mockProcurementGroups.reduce((best, current) =>
      current.estimatedSavings > best.estimatedSavings ? current : best
    );

    return `The largest savings opportunity is ${topGroup.groupName}, with estimated savings of ${formatCurrency(
      topGroup.estimatedSavings
    )}. This comes from bundling demand and negotiating stronger supplier terms.`;
  }

  if (lowerQuestion.includes("bundled") || lowerQuestion.includes("bundle")) {
    return "Products with repeated demand and standardized specifications should be bundled first. Current candidates include nitrile gloves, sterile syringes, and FFP2 surgical masks.";
  }

  const manufacturerOffers = mockSuppliers.filter(
    (supplier) => supplier.supplierType === SupplierType.Manufacturer
  );

  return `Based on the current procurement data, ${manufacturerOffers.length} manufacturer offers are available. Direct manufacturer sourcing is a strong opportunity where price, availability, and certifications are competitive.`;
}

export function ProcurementAssistantPage() {
  const [question, setQuestion] = useState(suggestedQuestions[0]);
  const [answer, setAnswer] = useState(getMockAnswer(suggestedQuestions[0]));

  function handleAsk(selectedQuestion?: string) {
    const nextQuestion = selectedQuestion ?? question;
    setQuestion(nextQuestion);
    setAnswer(getMockAnswer(nextQuestion));
  }

  return (
    <div>
      <header>
        <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
          Natural Language Procurement Assistant
        </p>

        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-slate-950">
          Ask procurement questions in plain English
        </h1>

        <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">
          A mocked AI assistant that answers sourcing, delivery risk, savings,
          and bundling questions based on dashboard data.
        </p>
      </header>

      <section className="mt-8 grid gap-6 xl:grid-cols-[0.75fr_1.25fr]">
        <aside className="rounded-3xl border border-slate-200 bg-white p-5 shadow-[var(--shadow-card)]">
          <h2 className="text-lg font-semibold text-slate-950">
            Suggested questions
          </h2>

          <div className="mt-5 space-y-3">
            {suggestedQuestions.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => handleAsk(item)}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:border-teal-300 hover:bg-teal-50 hover:text-teal-800"
              >
                {item}
              </button>
            ))}
          </div>
        </aside>

        <section className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-[var(--shadow-soft)]">
          <div className="rounded-[1.5rem] bg-gradient-to-br from-teal-700 to-sky-600 p-5 text-white">
            <p className="text-sm font-semibold text-teal-50">
              Procurement AI
            </p>

            <p className="mt-2 text-2xl font-semibold tracking-tight">
              What should the procurement team prioritize?
            </p>
          </div>

          <div className="mt-5 space-y-4">
            <div className="ml-auto max-w-xl rounded-3xl rounded-tr-md bg-teal-700 px-5 py-4 text-sm leading-6 text-white">
              {question}
            </div>

            <div className="max-w-2xl rounded-3xl rounded-tl-md border border-slate-200 bg-slate-50 px-5 py-4 text-sm leading-7 text-slate-700">
              {answer}
            </div>
          </div>

          <div className="mt-5">
            <label
              htmlFor="assistant-question"
              className="text-sm font-semibold text-slate-700"
            >
              Procurement question
            </label>

            <textarea
              id="assistant-question"
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
              rows={4}
              className="mt-2 w-full resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 shadow-sm outline-none placeholder:text-slate-400 focus:border-teal-600"
            />

            <button
              type="button"
              onClick={() => handleAsk()}
              className="mt-4 rounded-2xl bg-teal-700 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-teal-700/20 transition hover:bg-teal-800"
            >
              Ask assistant
            </button>
          </div>
        </section>
      </section>
    </div>
  );
}
