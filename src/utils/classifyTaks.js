import { identifyTaskClassification } from "./identifyTaskClassification";

export const classifyTaks = (arr) => {
  const newArr = arr.map((elem) => {
    const start = elem.start_date;
    const end = elem.end_date;
    const total = elem.total;
    const proc = elem.processed;

    const { secondaryId, label, displayLabel } = identifyTaskClassification(
      start,
      end,
      total,
      proc
    );

    elem.secondaryId = secondaryId;
    elem.label = label;
    elem.displayLabel = displayLabel;

    return elem;
  });

  return newArr;
};
