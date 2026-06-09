import EducationCard from "./EducationCard";
import { educationData } from "./educationData";

function EducationRoadmap() {
  return (
    <div className="mt-20">
      <div className="space-y-20">
        {educationData.map((item, index) => (
          <div
            key={item.id}
            className="
              grid
              lg:grid-cols-[80px_1fr]
              gap-8
              items-center
            "
          >
            {/* Timeline */}

            <div className="relative hidden lg:flex justify-center">
              {/* Line */}

              {index !== educationData.length - 1 && (
                <div
                  className="
                    absolute
                    top-10
                    left-1/2
                    -translate-x-1/2
                    w-[2px]
                    h-[180px]
                    bg-[#c0c1ff]/30
                  "
                />
              )}

              {/* Node */}

              <div
                className="
                  relative
                  z-10
                  w-10
                  h-10
                  rounded-full
                  bg-[#0b1020]
                  border
                  border-[#c0c1ff]/30
                  flex
                  items-center
                  justify-center
                "
              >
                <div
                  className="
                    w-4
                    h-4
                    rounded-full
                    bg-[#c0c1ff]
                    animate-pulse
                  "
                  style={{
                    boxShadow: "0 0 25px rgba(192,193,255,.9)",
                  }}
                />
              </div>
            </div>

            <EducationCard {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default EducationRoadmap;
