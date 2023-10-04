import React from "react";
import PageWithNavBar from "../components/PageWithNavBar";
import Alert from "../components/Alert";
import GameManager from "../classes/GameManager";

function MagicStats() {
  let MyData = new GameManager();

  return (
    <PageWithNavBar>
      <Alert>Magic tracking coming after I port from .java to .tsx</Alert>
    </PageWithNavBar>
  );
}

// Useful for forms
// https://getbootstrap.com/docs/5.3/forms/validation/?

export default MagicStats;
