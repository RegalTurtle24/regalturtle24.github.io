import RightToRepairPageWithNavBar from "../../components/RightToRepair/RightToRepairPageWithNavBar";

const RightToRepairConcerns = () => {
  return (
    <div
      style={{
        backgroundColor: "rgba(170, 170, 170, 1)",
        height: "100%",
        minHeight: "100vh",
      }}
    >
      <RightToRepairPageWithNavBar>
        <div
          className="container-fluid"
          style={{
            paddingTop: "3rem",
            paddingBottom: "1rem",
            paddingLeft: "0rem",
            paddingRight: "0rem",
          }}
        >
          <div
            className="container-fluid rounded-4"
            style={{
              padding: "3rem",
              textAlign: "center",
              width: "75%",
              background:
                "linear-gradient(315deg, rgba(104, 125, 125, 0.8), rgba(125, 113, 104, 0.8), rgba(104, 125, 125, 0.8))",
            }}
          >
            <h1
              style={{
                fontFamily: "Courier New",
                fontWeight: "bold",
              }}
            >
              Potential Downfalls
            </h1>
            <h3 style={{ fontFamily: "Courier New", fontWeight: "bold" }}>
              Although there certainly are many reasons to adopt right to repair
              philosophies, there are understandable critiques of the idea that
              repair should be accessable.
            </h3>
          </div>

          <div style={{ padding: "1rem" }} />

          <div
            className="container-fluid rounded-4"
            style={{
              padding: "1rem",
              paddingBottom: "0.1rem",
              textAlign: "left",
              width: "90%",
              backgroundColor: "rgba(0, 47, 108, 0.3)",
            }}
          >
            <p style={{ paddingLeft: "1rem", fontSize: "1.1rem" }}>
              While there are many reasons to adopt right to repair, there are
              reasons to believe that the requirements right to repair forces
              might be detrimental for the consumer.
            </p>

            <p style={{ paddingLeft: "1rem", fontSize: "1.1rem" }}>
              The first reason to be cautious of right to repair is the
              possibility that companies raise prices. Currently, companies make
              increased profit, because whenever your phone breaks, you must
              either buy a new phone, or go through a regulated process that
              they have some amount of control over. In the future, if right to
              repair laws come to pass, they would not have the same level of
              control, and would lose income from the lack of people coming to
              spend money after their phone stops working as well. It is
              theorized that this decrease in profit would be pushed to the
              consumer as seen by an increase in price per purchase, but it is
              not clear if that would actually happen.
            </p>

            <p style={{ paddingLeft: "1rem", fontSize: "1.1rem" }}>
              Another concern put forward about Right to Repair is the safety of
              the devices after they have been changed. Because independant
              repair stores aren't individually vetted by the company who
              produces the product, they cannot all be held to the same standard
              as the company who makes the device. While this might not matter
              much for a cell phone or laptop, when you talk about medical
              equipment or the systems in use on cars, it becomes clear that
              some systems must have some level of safety due to the situations
              in which they are used.
            </p>
          </div>
        </div>
      </RightToRepairPageWithNavBar>
    </div>
  );
};

export default RightToRepairConcerns;
