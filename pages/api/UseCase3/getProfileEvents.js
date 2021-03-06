import axios from 'axios';
export default async function getProfileEvents(req, res) {
  const profileId = req.query.profileId;
  const metricId = req.query.metric;
  if (metricId && metricId !== 'all') {
    const { data } = await axios.get(
      `https://a.klaviyo.com/api/v1/person/${profileId}/metric/${metricId}/timeline?api_key=${process.env.KLAVIYO_SECRET_KEY}`
    );

    return res.status(200).send(data.data);
  } else {
    const { data } = await axios.get(
      `https://a.klaviyo.com/api/v1/person/${profileId}/metrics/timeline?api_key=${process.env.KLAVIYO_SECRET_KEY}`
    );

    return res.status(200).send(data.data);
  }
}
