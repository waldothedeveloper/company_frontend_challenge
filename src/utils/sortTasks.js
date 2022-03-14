export const sortTasks = (a, b) => {
  if (
    a.secondaryId === 0 ||
    b.secondaryId === 1 ||
    a.secondaryId === 1 ||
    b.secondaryId === 0
  ) {
    return a.secondaryId - b.secondaryId;
  } else {
    const dateA = new Date(a.end_date);
    const dateB = new Date(b.end_date);

    return dateA - dateB;
  }
};
