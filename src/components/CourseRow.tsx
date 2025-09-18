import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface Course {
  id: string;
  name: string;
  credits: number;
  marks?: number;
  grade?: string;
}

interface CourseRowProps {
  course: Course;
  onUpdate: (id: string, field: keyof Course, value: string | number) => void;
  onDelete: (id: string) => void;
  showDelete: boolean;
}

const gradeOptions = [
  { value: "A+", label: "A+ (4.00)" },
  { value: "A", label: "A (3.75)" },
  { value: "A-", label: "A- (3.50)" },
  { value: "B+", label: "B+ (3.25)" },
  { value: "B", label: "B (3.00)" },
  { value: "B-", label: "B- (2.75)" },
  { value: "C+", label: "C+ (2.50)" },
  { value: "C", label: "C (2.25)" },
  { value: "D", label: "D (2.00)" },
  { value: "F", label: "F (0.00)" },
];

export const CourseRow = ({ course, onUpdate, onDelete, showDelete }: CourseRowProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-6 gap-4 p-4 bg-card border border-border rounded-lg animate-slide-up">
      <div className="md:col-span-2">
        <Input
          placeholder="Course Name"
          value={course.name}
          onChange={(e) => onUpdate(course.id, "name", e.target.value)}
          className="input-academic"
        />
      </div>
      
      <div>
        <Input
          type="number"
          placeholder="Credits"
          value={course.credits || ""}
          onChange={(e) => onUpdate(course.id, "credits", parseFloat(e.target.value) || 0)}
          className="input-academic"
          min="0"
          step="0.5"
        />
      </div>
      
      <div>
        <Input
          type="number"
          placeholder="Marks (0-100)"
          value={course.marks || ""}
          onChange={(e) => {
            const marks = parseFloat(e.target.value);
            onUpdate(course.id, "marks", marks);
            // Auto-convert marks to grade
            if (!isNaN(marks)) {
              let grade = "F";
              if (marks >= 80) grade = "A+";
              else if (marks >= 75) grade = "A";
              else if (marks >= 70) grade = "A-";
              else if (marks >= 65) grade = "B+";
              else if (marks >= 60) grade = "B";
              else if (marks >= 55) grade = "B-";
              else if (marks >= 50) grade = "C+";
              else if (marks >= 45) grade = "C";
              else if (marks >= 40) grade = "D";
              
              onUpdate(course.id, "grade", grade);
            }
          }}
          className="input-academic"
          min="0"
          max="100"
        />
      </div>
      
      <div>
        <Select 
          value={course.grade || ""} 
          onValueChange={(value) => onUpdate(course.id, "grade", value)}
        >
          <SelectTrigger className="input-academic">
            <SelectValue placeholder="Grade" />
          </SelectTrigger>
          <SelectContent>
            {gradeOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      <div className="flex justify-center">
        {showDelete && (
          <Button
            variant="destructive"
            size="icon"
            onClick={() => onDelete(course.id)}
            className="transition-all duration-200 hover:scale-110"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
};