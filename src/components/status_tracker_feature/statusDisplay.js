import Error from "./table_components/status/error";
import ErrorDisplay from "./conditional_states/errorDisplay";
import InProgress from "./table_components/status/inProgress";
import Inactive from "./table_components/status/inactive";
import LoadingDisplay from "./conditional_states/loadingDisplay";
import NiceStatus from "./table_components/status/niceStatus";
import Progress from "./table_components/progress/progress";
import React from "react";
import RequestDate from "./table_components/requestDate/requestDate";
import Success from "./table_components/status/success";
import TableDescription from "./table_components/tableDescription";
import TableHead from "./table_components/tableHead";
import User from "./table_components/user/user";
import { useAPIEndpoints } from "../../hooks/useAPIEndpoints";
import { useStatus } from "../../hooks/useStatus";

export default function StatusDisplay() {
  // see this hook at /hooks/useAPIEndpoints for more info:
  const { endpoints, handleAPIEndPoints } = useAPIEndpoints();

  // hook fetching the data from the API: /api/{number}
  const { data, isError, isLoading } = useStatus(endpoints["num"]);

  // Conditional rendering of the status display:
  if (isLoading) return <LoadingDisplay />;

  if (isError) return <ErrorDisplay message={isError} />;

  return (
    <div className="my-16 px-4 sm:px-6 lg:px-8">
      <TableDescription
        endpoints={endpoints}
        handleAPIEndPoints={handleAPIEndPoints}
      />
      <div className="-mx-4 mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg">
        <table className="min-w-full divide-y divide-gray-300">
          <TableHead />
          <tbody className="divide-y divide-gray-200 bg-white">
            {data &&
              data.map((data) => (
                <tr key={data.id}>
                  <td className="flex w-full flex-col py-4 pl-4 pr-3 text-sm font-medium text-gray-700 sm:w-auto">
                    <Inactive label={data.label} remaining={data.remaining} />
                    <InProgress label={data.label} remaining={data.remaining} />
                    <Error label={data.label} end_date={data.end_date} />
                    <Success label={data.label} end_date={data.end_date} />
                    <NiceStatus status={data.status} label={data.label} />
                    <dl className="font-normal lg:hidden">
                      <dt className="sr-only">Progress</dt>
                      <dd className="mt-1 text-slate-500">
                        <Progress
                          processed={data.processed}
                          total={data.total}
                        />
                      </dd>
                      <dt className="sr-only sm:hidden">Email</dt>
                      <dd className="mt-1 truncate font-medium sm:hidden">
                        <User email={data.email} fullname={data.fullname} />
                      </dd>
                    </dl>
                  </td>
                  <td className="hidden px-3 py-4 text-sm font-medium text-slate-500 lg:table-cell">
                    <Progress processed={data.processed} total={data.total} />
                  </td>
                  <td className="hidden px-3 py-4 text-sm font-medium sm:table-cell">
                    <User email={data.email} fullname={data.fullname} />
                  </td>
                  <td className="px-3 py-4 text-sm font-medium text-slate-500">
                    <RequestDate request_date={data.request_date} />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
