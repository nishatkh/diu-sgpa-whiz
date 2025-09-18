import { useState } from "react";
import { Plus, Calculator, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CourseRow } from "./CourseRow";
import { ResultCard } from "./ResultCard";

interface Course {
  id: string;
  name: string;
  credits: number;
  grade?: string;
}

const facultyWaiverRules = {
  "be-sit-ahs-eng": {
    name: "BE, SIT, AHS, Engineering",
    rules: [
      { minSGPA: 4.00, waiver: 50 },
      { minSGPA: 3.90, waiver: 30 },
      { minSGPA: 3.85, waiver: 20 },
      { minSGPA: 3.80, waiver: 10 },
    ]
  },
  "humanities-social": {
    name: "Humanities & Social Sciences",
    rules: [
      { minSGPA: 3.90, waiver: 50 },
      { minSGPA: 3.85, waiver: 40 },
      { minSGPA: 3.80, waiver: 20 },
      { minSGPA: 3.75, waiver: 15 },
      { minSGPA: 3.60, waiver: 10 },
    ]
  }
};

const gradeToGPA = {
  "A+": 4.00, "A": 3.75, "A-": 3.50, "B+": 3.25, "B": 3.00,
  "B-": 2.75, "C+": 2.50, "C": 2.25, "D": 2.00, "F": 0.00
};

export const SGPACalculator = () => {
  const [courses, setCourses] = useState<Course[]>([
    { id: "1", name: "", credits: 0 }
  ]);
  const [selectedFaculty, setSelectedFaculty] = useState<string>("");
  const [result, setResult] = useState<{ sgpa: number; waiver: { percentage: number; faculty: string } | null } | null>(null);

  const addCourse = () => {
    const newCourse: Course = {
      id: Date.now().toString(),
      name: "",
      credits: 0
    };
    setCourses([...courses, newCourse]);
  };

  const updateCourse = (id: string, field: keyof Course, value: string | number) => {
    setCourses(courses.map(course => 
      course.id === id ? { ...course, [field]: value } : course
    ));
  };

  const deleteCourse = (id: string) => {
    setCourses(courses.filter(course => course.id !== id));
  };

  const calculateSGPA = () => {
    const validCourses = courses.filter(course => 
      course.name.trim() && course.credits > 0 && course.grade
    );

    if (validCourses.length === 0) {
      alert("Please add at least one complete course with name, credits, and grade.");
      return;
    }

    let totalGradePoints = 0;
    let totalCredits = 0;

    validCourses.forEach(course => {
      const gpa = gradeToGPA[course.grade as keyof typeof gradeToGPA] || 0;
      totalGradePoints += gpa * course.credits;
      totalCredits += course.credits;
    });

    const sgpa = totalCredits > 0 ? totalGradePoints / totalCredits : 0;
    
    // Calculate waiver - check from highest to lowest SGPA requirements
    let waiver = { percentage: 0, faculty: "" };
    if (selectedFaculty && facultyWaiverRules[selectedFaculty as keyof typeof facultyWaiverRules]) {
      const faculty = facultyWaiverRules[selectedFaculty as keyof typeof facultyWaiverRules];
      waiver.faculty = faculty.name;
      
      // Sort rules by minSGPA in descending order and find the first match
      const sortedRules = [...faculty.rules].sort((a, b) => b.minSGPA - a.minSGPA);
      for (const rule of sortedRules) {
        if (sgpa >= rule.minSGPA) {
          waiver.percentage = rule.waiver;
          break;
        }
      }
    }

    setResult({ sgpa, waiver });
  };

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <GraduationCap className="w-12 h-12 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold text-gradient">
              DIU SGPA & Waiver Calculator
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Calculate your semester GPA and check waiver eligibility based on DIU's official grading policies
          </p>
        </div>

        {/* Faculty Selection */}
        <div className="card-academic animate-fade-in">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <label className="text-lg font-semibold text-foreground whitespace-nowrap">
              Select Faculty:
            </label>
            <Select value={selectedFaculty} onValueChange={setSelectedFaculty}>
              <SelectTrigger className="input-academic max-w-md">
                <SelectValue placeholder="Choose your faculty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="be-sit-ahs-eng">
                  Faculty of BE, SIT, AHS, Engineering
                </SelectItem>
                <SelectItem value="humanities-social">
                  Faculty of Humanities & Social Sciences
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Course Input Form */}
        <div className="card-academic animate-fade-in">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Calculator className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold">Course Information</h2>
            </div>

            {/* Course Headers */}
            <div className="hidden md:grid md:grid-cols-5 gap-4 px-4 py-2 bg-muted rounded-lg text-sm font-semibold text-muted-foreground">
              <div className="col-span-2">Course Name</div>
              <div>Credits</div>
              <div>Grade</div>
              <div className="text-center">Action</div>
            </div>

            {/* Course Rows */}
            <div className="space-y-4">
              {courses.map((course) => (
                <CourseRow
                  key={course.id}
                  course={course}
                  onUpdate={updateCourse}
                  onDelete={deleteCourse}
                  showDelete={courses.length > 1}
                />
              ))}
            </div>

            {/* Add Course Button */}
            <Button
              onClick={addCourse}
              className="btn-add-course"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Course
            </Button>
          </div>
        </div>

        {/* Calculate Button */}
        <div className="text-center animate-fade-in">
          <Button
            onClick={calculateSGPA}
            className="btn-academic text-lg px-12 py-4"
            disabled={!selectedFaculty}
          >
            <Calculator className="w-5 h-5 mr-2" />
            Calculate SGPA & Waiver
          </Button>
          {!selectedFaculty && (
            <p className="text-sm text-muted-foreground mt-2">
              Please select your faculty to calculate waiver eligibility
            </p>
          )}
        </div>

        {/* Results */}
        {result && (
          <div className="animate-fade-in">
            <ResultCard sgpa={result.sgpa} waiver={result.waiver} />
          </div>
        )}

        {/* Footer */}
        <div className="text-center text-muted-foreground text-sm animate-fade-in">
          <p>© 2024 DIU SGPA Calculator. Built for Dhaka International University students.</p>
        </div>
      </div>
    </div>
  );
};