import styled from "styled-components";

export default function Calendar(props) {
  const schedule = [
    {
      day: "Thursday",
      date: "August 27, 2021",
      items: [
        {
          time: "all-day",
          activity: "doin your mom",
        },
      ],
    },
    {
      day: "Friday",
      date: "August 28, 2021",
      items: [
        {
          time: "all-day",
          activity: "doin your mom again",
        },
        {
          time: "all-day",
          activity: "doin your mom again again",
        },
        ,
        {
          time: "all-day",
          activity: "doin your mom again again again",
        },
      ],
    },
    {
      day: "Saturday",
      date: "August 29, 2021",
      items: [
        {
          time: "all-day",
          activity: "doin your mom",
        },
        {
          time: "all-day",
          activity: "doin your mom",
        },
      ],
    }, 
  ];

  return (
    <Wrapper>
      {schedule.map((day, i) => {
        return [<CalendarHeader key={i} day={day.day} date={day.date} />].concat(
          ...day.items.map((item, index) => <CalendarItem key={index * i} time={item.time} activity={item.activity} />)
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  align-items: center;
  justify-content: center;
  padding: 0.3rem;
  border: 2px solid #eaeaea;
  min-width: 80%;
`;

function CalendarHeader(props) {
  return (
    <HeaderWrapper>
      <p>{props.day}</p>
      <p>{props.date}</p>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #eaeaea;
  width: 100%;
  padding: 0.5rem;
`;

function CalendarItem(props) {
  return (
    <ItemWrapper>
      <Time>{props.time}</Time>
      <p>{props.activity}</p>
    </ItemWrapper>
  );
}

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  padding: 0.5rem;
`;

const Time = styled.div`
  display: flex;
  flex-basis: 20%;
`;
