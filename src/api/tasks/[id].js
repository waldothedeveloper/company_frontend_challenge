import { Headers } from "node-fetch";
import { classifyTaks } from "../../utils/classifyTaks";
import fetch from "node-fetch";
import { sortTasks } from "../../utils/sortTasks";

export default async function fetchTasks(req, res) {
  const url = `http://localhost:3000/api/${req.params.id}`;

  // ! IMPORTANT: A .env file should be used here for the api-key value, but for the sake of this example, I'm using a hardcoded value.
  const headers = new Headers();
  headers.append("api-key", "globus");

  const requestOptions = {
    method: "GET",
    headers: headers,
    redirect: "follow",
  };

  try {
    const result = await fetch(url, requestOptions).then((res) => res.json());
    const classifiedTasks = await classifyTaks(result.DATA).sort(sortTasks);

    res.status(200).json(classifiedTasks);
  } catch (err) {
    const error = new Error("An error ocurred while fetching the data");
    error.status = res.status;
    error.info = await res.json();
    throw error;
  }
}
