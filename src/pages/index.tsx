import { Inter } from 'next/font/google'
import { Card } from '@/components/Card'
import { useCallback, useMemo, useState } from 'react';
import { Tab, TabPanel, TabProvider } from '@/components/Tab';

const inter = Inter({ subsets: ['latin'] })

const steps = ['Mode', 'Token', 'Details', 'Requirements', 'Finish'];
export default function Home() {
  const [currentTab, setCurrentTab] = useState(0);

  const handleTabSelect = useCallback((index: number) => {
    setCurrentTab(index);
  }, []);

  const memoizedTab = useMemo(
    () => (
      <Tab
        tabs={steps}
        defaultTab={0}
        onTabSelect={handleTabSelect}
      />
    ),
    [steps, handleTabSelect]
  );

  
  return (
    <main
      className={`flex flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Card />
      <TabProvider>
        <h2 className="text-2xl font-semibold text-dark-9 2xl:text-3xl pt-8">Steps</h2>
          {memoizedTab}
        <TabPanel>
          <div>
            Mode tab content
          </div>
          <div>
            Token tab content
          </div>
          <div>
            Details tab content
          </div>
          <div>
            Requirements tab content
          </div>
          <div>
            Finish tab content
          </div>
        </TabPanel>
      </TabProvider>
    </main>
  )
}
