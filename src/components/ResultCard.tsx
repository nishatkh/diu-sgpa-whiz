import { Award, TrendingUp } from "lucide-react";

interface ResultCardProps {
  sgpa: number;
  waiver: { percentage: number; faculty: string } | null;
}

export const ResultCard = ({ sgpa, waiver }: ResultCardProps) => {
  return (
    <div className="card-result animate-glow">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
            <TrendingUp className="w-8 h-8 text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold">Your SGPA</h3>
            <p className="text-3xl font-black">{sgpa.toFixed(2)}</p>
          </div>
        </div>
        
        {waiver && waiver.percentage > 0 && (
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <Award className="w-8 h-8 text-white" />
            </div>
            <div className="text-center md:text-right">
              <h3 className="text-2xl font-bold">Waiver Eligible</h3>
              <p className="text-3xl font-black">{waiver.percentage}%</p>
              <p className="text-sm opacity-90">{waiver.faculty}</p>
            </div>
          </div>
        )}
        
        {waiver && waiver.percentage === 0 && (
          <div className="text-center md:text-right opacity-80">
            <h3 className="text-xl font-semibold">No Waiver</h3>
            <p className="text-sm">Better luck next semester!</p>
          </div>
        )}
      </div>
    </div>
  );
};