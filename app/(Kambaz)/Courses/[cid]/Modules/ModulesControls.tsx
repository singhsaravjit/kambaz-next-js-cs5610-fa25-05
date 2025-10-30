import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";
import { MdDoNotDisturbAlt } from "react-icons/md";
import ModuleEditor from "./ModuleEditor";
import { useState } from "react";

type ModulesControlsProps = {
  moduleName: string;
  setModuleName: (title: string) => void;
  addModule: () => void;
  canEdit: boolean; // <-- NEW
};

export default function ModulesControls({
  moduleName,
  setModuleName,
  addModule,
  canEdit,
}: ModulesControlsProps) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div id="wd-modules-controls" className="text-nowrap">
      {/* + Module button (FACULTY/ADMIN ONLY) */}
      {canEdit && (
        <>
          <Button
            variant="danger"
            onClick={handleShow}
            size="lg"
            className="me-1 float-end"
            id="wd-add-module-btn"
          >
            <FaPlus
              className="position-relative me-2"
              style={{ bottom: "1px" }}
            />
            Module
          </Button>

          {/* The modal/editor to actually add a module (also only if canEdit) */}
          <ModuleEditor
            show={show}
            handleClose={handleClose}
            dialogTitle="Add Module"
            moduleName={moduleName}
            setModuleName={setModuleName}
            addModule={addModule}
          />
        </>
      )}

      {/* Publish All dropdown -> ALWAYS visible */}
      <Dropdown className="float-end me-2">
        <DropdownToggle
          variant="secondary"
          size="lg"
          id="wd-publish-all-btn"
        >
          <GreenCheckmark /> Publish All
        </DropdownToggle>

        <DropdownMenu>
          <DropdownItem id="wd-publish-all-modules-and-items">
            <GreenCheckmark /> Publish all modules and items
          </DropdownItem>
          <DropdownItem id="wd-publish-modules-only">
            <GreenCheckmark /> Publish modules only
          </DropdownItem>
          <DropdownItem id="wd-unpublish-all-modules-and-items">
            <MdDoNotDisturbAlt className="me-2" />
            Unpublish all modules and items
          </DropdownItem>
          <DropdownItem id="wd-unpublish-modules-only">
            <MdDoNotDisturbAlt className="me-2" />
            Unpublish modules only
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>

      {/* View Progress -> ALWAYS visible */}
      <Button
        variant="secondary"
        size="lg"
        className="me-2 float-end"
        id="wd-view-progress"
      >
        View Progress
      </Button>

      {/* Collapse All -> ALWAYS visible */}
      <Button
        variant="secondary"
        size="lg"
        className="me-2 float-end"
        id="wd-collapse-all"
      >
        Collapse All
      </Button>
    </div>
  );
}
