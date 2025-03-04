import { theme } from "@/styles/theme/theme";
import { css } from "@emotion/react";

export const layoutStyle = css`
  border: 1px solid red;
  display: flex;
  align-items: center;
`;

export const triangleStyle = css`
  width: 0;
  height: 0;
  border-top: 1.5rem solid transparent;
  border-bottom: 1.5rem solid transparent;
  border-left: 1.4rem solid ${theme.color.dark2};
`;

export const containerStyle = css`
  width: 22.6rem;

  border-radius: 1rem;

  /* background-color: ${theme.color.dark2}; */

  .react-calendar {
    border: none;
    background-color: transparent;
  }
`;

export const calendarStyle = css`
  .react-calendar__navigation {
    margin: 0;

    height: 5.6rem;

    border-radius: 1rem 1rem 0 0;

    background-color: ${theme.color.dark2};

    span {
      ${theme.font.body2}
      color: ${theme.color.white}
    }
  }

  .react-calendar__navigation__label {
    /* ${theme.font.body2}
    color: ${theme.color.white} */
  }

  .react-calendar__navigation__label:disabled {
    background-color: transparent;
  }

  // arrow
  .react-calendar__navigation__arrow {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 5rem;

    ${theme.font.body1};
    color: ${theme.color.white};
  }

  .react-calendar__navigation__arrow:hover {
    background-color: transparent;
  }

  .react-calendar__navigation__arrow:enabled:focus {
    background-color: transparent;
  }

  // container
  .react-calendar__month-view__weekNumbers {
    text-decoration: none;
  }

  .react-calendar__viewContainer {
    /* border: 1px solid blue; */
    padding: 0 1.2rem 1.2rem 1.2rem;

    border-radius: 0 0 1rem 1rem;

    background-color: ${theme.color.dark2};
  }

  // weekday
  .react-calendar__month-view__weekdays__weekday {
    /* border: 1px solid pink; */
    padding: 0.8rem 0.8rem 1.2rem 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;

    :nth-of-type(1) abbr {
      color: ${theme.color.primaryPink1};
    }

    abbr {
      ${theme.font.body2}
      font-weight: 400;
      color: ${theme.color.gray2};
      text-decoration: none;
    }
  }

  // tile
  .react-calendar__tile {
    display: flex;
    justify-content: center;

    /* border: 1px solid yellow; */
    abbr {
      color: ${theme.color.white};
      ${theme.font.body3};
      font-weight: 400;
    }
  }

  .react-calendar__tile:hover {
    background-color: transparent;
  }

  // today
  .react-calendar__tile--now {
    background-color: transparent;
  }

  // day
  .react-calendar__month-view__days__day {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 28px;
    height: 28px;
    /* border: 1px solid orange; */
    padding: 0.2rem;

    abbr {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      /* border: 1px solid red; */
    }
  }

  // active  day
  .react-calendar__tile--hasActive {
    /* background-color: transparent; */
  }

  .react-calendar__tile--hasActive:enabled:hover,
  .react-calendar__tile--hasActive:enabled:focus {
    /* background-color: transparent; */
  }

  .react-calendar__tile--active {
    background-color: transparent;
    abbr {
      /* border: 1px solid red; */
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: ${theme.color.primaryBlue2};
    }
  }

  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background-color: transparent;
  }

  // today
  .react-calendar__tile--now {
    /* background-color: transparent; */
  }

  // past day
  .past-day abbr {
    color: ${theme.color.gray2};
  }
`;
