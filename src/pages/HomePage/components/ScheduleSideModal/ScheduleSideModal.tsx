import { RotateLogoIcon } from "@/assets/svg";
import { SideModal } from "@/components";
import ScheduleBlock from "@/pages/HomePage/components/ScheduleBlock/ScheduleBlock";
import { SCHEDULES_DUMMY } from "@/pages/HomePage/constants/schedulesDummy";
import * as s from "./ScheduleSideModal.styles";

interface ScheduleSideModalProps {
  isVisible: boolean;
  setIsVisible: (value: boolean) => void;
}

const ScheduleSideModal = ({
  isVisible,
  setIsVisible,
}: ScheduleSideModalProps) => {
  return (
    <SideModal
      titleChildren={
        <div css={s.titleChildrenStyle}>
          <RotateLogoIcon width={27} height={30} />
          <h1>일정 등록하기</h1>
          <span>나의 커피챗 스케줄과 타임라인을 확인해보세요</span>
        </div>
      }
      maxWidth="93rem"
      isVisible={isVisible}
      setIsVisible={setIsVisible}
    >
      <ul css={s.contentStyle}>
        {SCHEDULES_DUMMY.map((schedule) => (
          <li key={schedule.id}>
            <ScheduleBlock
              id={schedule.id}
              title={schedule.title}
              location={schedule.location}
              locationDetail={schedule.locationDetail}
              date={schedule.date}
              startTime={schedule.startTime}
              endTime={schedule.endTime}
            />
          </li>
        ))}
      </ul>
    </SideModal>
  );
};

export default ScheduleSideModal;
