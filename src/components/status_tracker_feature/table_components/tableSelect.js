import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import { Listbox, Transition } from "@headlessui/react";
import React, { Fragment } from "react";

import PropTypes from "prop-types";

const apiEndpoints = [
  { text: "/api/1" },
  { text: "/api/2" },
  { text: "/api/3" },
  { text: "/api/4" },
];

const TableSelect = ({ handleAPIEndPoints, endpoints }) => {
  //
  return (
    <div className="top-16 w-32">
      <Listbox value={endpoints} onChange={handleAPIEndPoints}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-slate-800 py-2 pl-3 pr-10 text-left text-slate-50 shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">{endpoints.text}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <SelectorIcon
                className="h-5 w-5 text-slate-50"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {apiEndpoints.map((elem, idx) => (
                <Listbox.Option
                  key={idx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-amber-100 text-amber-700" : "text-slate-800"
                    }`
                  }
                  value={elem.text}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected.text ? "font-medium" : "font-normal"
                        }`}
                      >
                        {elem.text}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};
export default TableSelect;
TableSelect.propTypes = {
  handleAPIEndPoints: PropTypes.func.isRequired,
  endpoints: PropTypes.object.isRequired,
};
