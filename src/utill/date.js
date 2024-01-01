export const getStringDate = (date) => {
    return date.toISOString().slice(0, 10);
};

export const getDayOfWeek = (date) => {
    const dayOfWeek = date.getDay();
    const days = ["일", "월", "화", "수", "목", "금", "토"];
    return days[dayOfWeek];
};
