const answer = (req, res, vals) => {
  const operation = vals.select;

  let total;
  const one = parseInt(vals.first);
  const second = parseInt(vals.second);

  switch (operation) {
    case "plus":
      total = add(one, second);
      break;

    case "min":
      total = min(one, second);
      break;

    case "mul":
      total = mul(one, second);
      break;

    case "dev":
      total = dev(one, second);
      break;
  }
  return total;
};

const add = (one, two) => {
  return one + two;
};

const min = (one, two) => {
  return one - two;
};

const mul = (one, two) => {
  return one * two;
};

const dev = (one, two) => {
  return one / two;
};

exports.answer = answer;
