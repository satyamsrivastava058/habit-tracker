import {
  Target,
  CheckCircle,
  Flame,
  BarChart3,
  Clock,
  Code2,
  Router,
  Database,
} from "lucide-react";

const ProjectInfo = ({ isDark }) => {
  return (
    <div className="p-8 space-y-8">
      <div>
        <h1
          className={`text-4xl font-bold ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          Project Information
        </h1>

        <p
          className={`mt-2 ${
            isDark ? "text-gray-400" : "text-gray-500"
          }`}
        >
          About HabitTrack
        </p>
      </div>

      <div
        className={`rounded-xl border shadow-sm p-10 ${
          isDark
            ? "bg-gray-900 border-gray-700"
            : "bg-white border-blue-200"
        }`}
      >
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-36 h-36 rounded-3xl bg-[#494deb] flex items-center justify-center shadow-lg">
            <Target
              className="text-white"
              size={120}
              strokeWidth={2}
            />
          </div>

          <div className="flex-1">
            <h2
              className={`text-4xl font-bold ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              HabitTrack
            </h2>

            <p className="text-xl text-[#494deb] font-medium mt-2">
              Build better every day.
            </p>

            <p
              className={`mt-5 leading-8 max-w-2xl ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              HabitTrack is a modern React application designed to help users
              build positive habits, track daily progress, maintain streaks,
              and stay motivated through meaningful statistics and recent
              completion history.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <div
          className={`rounded-xl border p-6 shadow-sm ${
            isDark
              ? "bg-gray-900 border-gray-700 text-white"
              : "bg-white border-blue-200"
          }`}
        >
          <h2 className="text-xl font-semibold mb-6">
            Features
          </h2>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>Habit Management</span>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>Daily Progress Tracking</span>
            </div>

            <div className="flex items-center gap-3">
              <Flame className="w-5 h-5 text-orange-500" />
              <span>Streak Tracking</span>
            </div>

            <div className="flex items-center gap-3">
              <BarChart3 className="w-5 h-5 text-purple-500" />
              <span>Weekly Statistics</span>
            </div>

            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-blue-500" />
              <span>Recent Completions</span>
            </div>
          </div>
        </div>

        <div
          className={`rounded-xl border p-6 shadow-sm ${
            isDark
              ? "bg-gray-900 border-gray-700 text-white"
              : "bg-white border-blue-200"
          }`}
        >
          <h2 className="text-xl font-semibold mb-6">
            Technologies Used
          </h2>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Code2 className="w-5 h-5 text-sky-500" />
              <span>React</span>
            </div>

            <div className="flex items-center gap-3">
              <Code2 className="w-5 h-5 text-cyan-500" />
              <span>Tailwind CSS</span>
            </div>

            <div className="flex items-center gap-3">
              <Router className="w-5 h-5 text-indigo-500" />
              <span>React Router</span>
            </div>

            <div className="flex items-center gap-3">
              <Database className="w-5 h-5 text-green-600" />
              <span>Local Storage</span>
            </div>

            <div className="flex items-center gap-3">
              <BarChart3 className="w-5 h-5 text-pink-500" />
              <span>Recharts</span>
            </div>
          </div>
        </div>

        <div
          className={`rounded-xl border p-6 shadow-sm ${
            isDark
              ? "bg-gray-900 border-gray-700"
              : "bg-white border-blue-200"
          }`}
        >
          <h2
            className={`text-xl font-semibold mb-6 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            About This Project
          </h2>

          <p
            className={`leading-relaxed mb-6 ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            HabitTrack is a personal React project built to demonstrate modern
            React development practices, including reusable components,
            routing, state management, helper functions, responsive design,
            and local storage persistence.
          </p>

          <div className="space-y-4">
            <div>
              <p
                className={`text-sm ${
                  isDark ? "text-gray-400" : "text-gray-500"
                }`}
              >
                Version
              </p>

              <p
                className={`font-semibold ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                1.0.0
              </p>
            </div>

            <div>
              <p
                className={`text-sm ${
                  isDark ? "text-gray-400" : "text-gray-500"
                }`}
              >
                Last Updated
              </p>

              <p
                className={`font-semibold ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                July 5, 2026
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;