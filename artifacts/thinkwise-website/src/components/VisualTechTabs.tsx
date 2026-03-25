import React from 'react';

interface VisualTechTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  interactiveSpecs: {
    [key: string]: {
      title: string;
      image: string;
      items: string[];
    };
  };
}

const TAB_COLORS = {
  podium: {
    gradient: 'from-cyan-500 to-blue-600',
    text: 'text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-700',
    checkmark: 'text-purple-500',
    border: 'border-purple-300',
  },
  led: {
    gradient: 'from-blue-500 to-indigo-600',
    text: 'text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700',
    checkmark: 'text-blue-500',
    border: 'border-blue-300',
  },
  conference: {
    gradient: 'from-violet-500 to-purple-600',
    text: 'text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-700',
    checkmark: 'text-emerald-600',
    border: 'border-emerald-300',
  },
  ptz: {
    gradient: 'from-emerald-500 to-teal-600',
    text: 'text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-700',
    checkmark: 'text-emerald-600',
    border: 'border-emerald-300',
  },
  studio: {
    gradient: 'from-orange-500 to-amber-600',
    text: 'text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-700',
    checkmark: 'text-rose-600',
    border: 'border-rose-300',
  },
};

export default function VisualTechTabs({
  activeTab,
  setActiveTab,
  interactiveSpecs,
}: VisualTechTabsProps) {
  const colors = TAB_COLORS[activeTab as keyof typeof TAB_COLORS];

  return (
    <div className="w-full">
      <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-6 md:mb-12">
        {[
          { key: 'podium', label: 'Digital Podium' },
          { key: 'led', label: 'LED Wall' },
          { key: 'conference', label: 'Conference' },
          { key: 'ptz', label: 'PTZ Camera' },
          { key: 'studio', label: 'Studio' },
        ].map((tab) => {
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-3 md:px-6 py-2 md:py-3 rounded-lg transition-all duration-300 text-xs md:text-base whitespace-nowrap font-medium ${
                activeTab === tab.key
                  ? 'bg-gradient-to-r from-violet-500 to-purple-600 text-white shadow-lg shadow-violet-500/30'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-12 items-stretch lg:items-center bg-slate-50/50 rounded-2xl md:rounded-3xl p-3 md:p-6 lg:p-12 border border-slate-200">
        {/* Left side - Content */}
        <div className="flex flex-col gap-4 md:gap-8">
          <h3 className={`text-2xl md:text-4xl font-bold ${colors.text}`}>
            {interactiveSpecs[activeTab as keyof typeof interactiveSpecs]?.title}
          </h3>
          <div className="grid sm:grid-cols-2 gap-2 md:gap-4">
            {interactiveSpecs[activeTab as keyof typeof interactiveSpecs]?.items.map(
              (item, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-2 md:gap-3 p-2 md:p-4 bg-white rounded-lg md:rounded-xl border border-slate-200 hover:${colors.border} hover:shadow-md transition-all duration-300 group/spec`}
                >
                  <span className={`${colors.checkmark} mt-0.5 flex-shrink-0 text-base md:text-lg`}>
                    ✓
                  </span>
                  <span className={`font-medium text-slate-700 text-xs md:text-sm group-hover/spec:${colors.checkmark} transition-colors duration-300`}>
                    {item}
                  </span>
                </div>
              )
            )}
          </div>
        </div>

        {/* Right side - Image */}
        <div className="relative h-40 sm:h-48 md:h-64 lg:h-full lg:aspect-video rounded-xl md:rounded-2xl overflow-hidden shadow-xl lg:shadow-2xl group/image">
          <img
            src={interactiveSpecs[activeTab as keyof typeof interactiveSpecs]?.image}
            className="w-full h-full object-cover transition-transform duration-500 group-hover/image:scale-110"
            alt={
              interactiveSpecs[activeTab as keyof typeof interactiveSpecs]?.title
            }
          />
        </div>
      </div>
    </div>
  );
}
