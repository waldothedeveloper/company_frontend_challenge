export const identifyTaskClassification = (
  start_date,
  end_date,
  totalBytes,
  processedBytes
) => {
  if (!start_date)
    return { secondaryId: 0, label: "inactive", displayLabel: "not started" };
  if (start_date && !end_date && totalBytes !== processedBytes)
    return {
      secondaryId: 1,
      label: "in progress",
      displayLabel: "Time Remaining: ",
    };
  if (start_date && end_date && totalBytes !== processedBytes)
    return { secondaryId: 2, label: "error", displayLabel: "Halted: " };
  if (start_date && end_date && totalBytes === processedBytes)
    return { secondaryId: 3, label: "success", displayLabel: "Completed: " };
};
