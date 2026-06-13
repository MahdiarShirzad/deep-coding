export const buildCourseQueryParams = (searchParams) => {
  const params = {};

  const categories = searchParams.get("categories");
  if (categories) params.category = categories;

  const levels = searchParams.get("levels");
  if (levels) params.level = levels;

  const stars = searchParams.get("stars");
  if (stars) {
    const mins = stars.split(",").map((r) => Number(r.split("-")[0]));
    if (mins.length > 0) {
      params["ratingsAverage[gte]"] = Math.min(...mins);
    }
  }

  const times = searchParams.get("times");
  if (times) params.timeRanges = times;

  const search = searchParams.get("search");
  if (search) params.search = search;

  const sort = searchParams.get("sort");
  if (sort) params.sort = sort;

  const page = searchParams.get("page");
  if (page) params.page = page;

  const limit = searchParams.get("limit");
  if (limit) params.limit = limit;

  return params;
};
