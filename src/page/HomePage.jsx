import MonthStatsTable from 'components/MonthStatsTable/MonthStatsTable';

import { TodayWaterList } from 'components/TodayWaterList/TodayWaterList';
import { WaterRatioPanel } from 'components/WaterRatioPanel/WaterRatioPanel';
import { DailyNorma } from 'components/DailyNorma/dailyNorma';
import { BottleImg, ContentWrapper, HomePageSection } from './HomePage.styled';

const HomePage = () => {
  return (
    <>
      <HomePageSection>
        <ContentWrapper>
          <DailyNorma />
          <BottleImg className='dark-home-page-bottle' />
          <WaterRatioPanel />
        </ContentWrapper>
        <ContentWrapper className="right-panel">
          <TodayWaterList />
          <MonthStatsTable />
        </ContentWrapper>
      </HomePageSection>
    </>
  );
};

export default HomePage;
