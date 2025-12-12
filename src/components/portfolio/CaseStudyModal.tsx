// src/components/CaseStudyModal.tsx
import { CaseStudy } from "@/types/caseStudy";

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
  study: CaseStudy | null;
}

export function CaseStudyModal({ isOpen, onClose, study }: CaseStudyModalProps) {
  if (!isOpen || !study) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-start bg-black/50 overflow-auto">
      <div className="bg-white rounded-2xl max-w-4xl w-full m-8 p-12 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 text-2xl"
        >
          ×
        </button>

        <h2 className="text-3xl font-bold mb-4">{study.title}</h2>
        <p className="italic mb-4">{study.overview}</p>

        <div className="mb-4">
          <strong>My Role:</strong> {study.role} <br />
          <strong>Timeline:</strong> {study.timeline} <br />
          <strong>Deliverables:</strong> {study.deliverables}
        </div>

        <div className="mb-4">
          <h3 className="font-semibold">The Challenge</h3>
          <ul className="list-disc ml-6">
            {study.challenge.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold">My Approach</h3>
          {study.approach.map((a, i) => (
            <div key={i} className="mb-2">
              <strong>{a.step}</strong>
              <p>{a.description}</p>
            </div>
          ))}
        </div>

        {study.beforeAfter && (
          <div className="mb-4">
            <h3 className="font-semibold">Before & After</h3>
            <p><strong>Before:</strong> {study.beforeAfter.before}</p>
            <p><strong>After:</strong> {study.beforeAfter.after}</p>
          </div>
        )}

        <div className="mb-4">
          <h3 className="font-semibold">Outcome</h3>
          <p>{study.outcome}</p>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold">What I Would Do Next</h3>
          <ul className="list-disc ml-6">
            {study.nextSteps.map((n, i) => (
              <li key={i}>{n}</li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <p className="font-semibold text-primary">{study.cta}</p>
        </div>
      </div>
    </div>
  );
}
