import React from "react";
import AoCContainer from "../../../components/AdventOfCode/AoCContainer";
import Layout from "../../../components/Layout";
import SPALink from "../../../components/SPALink";

import {
  Day1Part1,
  Day1Part2,
} from "../../../components/AdventOfCode/2020/Day1";
import {
  Day2Part1,
  Day2Part2,
} from "../../../components/AdventOfCode/2020/Day2";
import { Day3 } from "../../../components/AdventOfCode/2020/Day3";
import {
  Day4Part1,
  Day4Part2,
} from "../../../components/AdventOfCode/2020/Day4";
import {
  Day5Part1,
  Day5Part2,
} from "../../../components/AdventOfCode/2020/Day5";

import {
  Day6Part1,
  Day6Part2,
} from "../../../components/AdventOfCode/2020/Day6";

const AoC2020 = () => {
  const aocLink = "https://adventofcode.com/2020";

  return (
    <Layout>
      <h1>
        <SPALink href={aocLink}>Advent of Code 2020</SPALink>
      </h1>
      <AoCContainer
        day={1}
        aocLink={aocLink}
        Part1={Day1Part1}
        Part2={Day1Part2}
      />
      <AoCContainer
        day={2}
        aocLink={aocLink}
        Part1={Day2Part1}
        Part2={Day2Part2}
      />
      <AoCContainer day={3} aocLink={aocLink} Part1={Day3} />
      <AoCContainer
        day={4}
        aocLink={aocLink}
        Part1={Day4Part1}
        Part2={Day4Part2}
      />
      <AoCContainer
        day={5}
        aocLink={aocLink}
        Part1={Day5Part1}
        Part2={Day5Part2}
      />
      <AoCContainer
        day={6}
        aocLink={aocLink}
        Part1={Day6Part1}
        Part2={Day6Part2}
      />
    </Layout>
  );
};

export default AoC2020;
