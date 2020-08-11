export const styles = {
  shadow:{
    boxShadow: "0px 30px 60px rgba(0,0,0,0.16)"
  },
  flexDefault: {
    display: "flex"
  },
  flexCentered: {
    justifyContent: "center",
    alignItems: "center"
  },

  modal: {
    base: {
      position: "fixed",
      top: 0,
      left: 0,
      height: "100vh",
      width: "100vw",
      transition: "0.2s ease-in-out"
    }
  },

  textContainer: {
    base: {
      background:"#FAF9FF",
      padding: "15px",
      height: "700px",
      width: "70%"
    },

    search: {
      padding: "10px 20px",
      marginBottom: "20px"
    }
  },
  messageBox:{
    base:{
      padding:"10px 20px",
    },
    chatArea:{
      height:"500px",
      overflowY:"scroll"
    }

  }
};