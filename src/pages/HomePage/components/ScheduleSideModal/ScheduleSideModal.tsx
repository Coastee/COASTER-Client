import { RotateLogoIcon } from "@/assets/svg";
import { SideModal } from "@/components";
import type { SideModalProps } from "@/components/SideModal/types/sideModalTypes";
import ScheduleBlock from "@/pages/HomePage/components/ScheduleBlock/ScheduleBlock";
import { useFetchSchedule } from "@/pages/HomePage/hooks/useFetchSchedule";
import * as s from "./ScheduleSideModal.styles";

const ScheduleSideModal = ({ isVisible, setIsVisible }: SideModalProps) => {
  // const [dropdownOpen, setDropdownOpen] = useState(false);
  // const [filteringOption, setFilteringOption] = useState(SCHEDULE_FILTERING_OPTIONS[0]);

  const { data } = useFetchSchedule();
  const schedule = data?.result.scheduleList;

  return (
    <SideModal
      titleChildren={
        <div css={s.titleChildrenStyle}>
          <RotateLogoIcon width={27} height={30} />
          <h1>일정 등록하기</h1>
          <span>나의 커피챗 스케줄과 타임라인을 확인해보세요</span>
        </div>
      }
      modalStyle={{ width: "100%", maxWidth: "93rem" }}
      isVisible={isVisible}
      setIsVisible={setIsVisible}
    >
      {/* <div css={s.sortingStyle}>
        <Button variant="sorting" onClick={() => setDropdownOpen((prev) => !prev)}>
          <ArrowDownIcon
            width={10}
            css={{
              transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
            }}
          />
          {filteringOption.name}
        </Button>
        {dropdownOpen && (
          <Dropdown
            options={SCHEDULE_FILTERING_OPTIONS}
            setItem={setFilteringOption}
            dropDownOpen={dropdownOpen}
            setDropdownOpen={setDropdownOpen}
          />
        )}
      </div> */}
      <ul css={s.contentStyle}>
        {schedule?.map((schedule) => (
          <li key={schedule.id}>
            <ScheduleBlock {...schedule} />
          </li>
        ))}
      </ul>
    </SideModal>
  );
};

export default ScheduleSideModal;
