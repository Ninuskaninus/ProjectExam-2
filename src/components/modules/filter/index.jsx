import React from "react";
import {ModuleContainerWhite, ModuleContentWhite, ModuleHeadWhite} from "../index.styles";
import FilterForm from "../../forms/filterSearch";

export default function FilterModal() {
  return (
    <ModuleContainerWhite id="filterModal">
      <ModuleContentWhite>
        <ModuleHeadWhite>
          <h2>Filter</h2>
        </ModuleHeadWhite>
        <FilterForm />
        </ModuleContentWhite>
    </ModuleContainerWhite>
  );
}