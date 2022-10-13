async function httpGetRoot(req, res) {
  res.status(200).json({
    message:
      "evtop application server hosted on www.evtop.org, Server is running live",
  });
}

module.exports = { httpGetRoot };
