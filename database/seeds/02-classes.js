exports.seed = function(knex) {
  return knex("classes").insert([
    {
      name: "yoga 101",
      group_id: "1",
      class_date: "2020-03-25",
      start_time: "3:30pm",
      duration: "30",
      intensity_level: "1",
      location: "Austin",
      current_size: "2",
      max_size: "30"
    },
    {
      name: "yoga 102",
      group_id: "1",
      class_date: "2020-03-26",
      start_time: "4:30pm",
      duration: "30",
      intensity_level: "2",
      location: "Austin",
      current_size: "2",
      max_size: "20"
    },
    {
      name: "yoga 103",
      group_id: "1",
      class_date: "2020-03-27",
      start_time: "5:30pm",
      duration: "30",
      intensity_level: "3",
      location: "Austin",
      current_size: "2",
      max_size: "10"
    },

    {
      name: "insanity 101",
      group_id: "2",
      class_date: "2020-04-25",
      start_time: "3:30pm",
      duration: "30",
      intensity_level: "1",
      location: "Austin",
      current_size: "2",
      max_size: "30"
    },
    {
      name: "insanity 102",
      group_id: "2",
      class_date: "2020-04-24",
      start_time: "4:30pm",
      duration: "30",
      intensity_level: "2",
      location: "Austin",
      current_size: "2",
      max_size: "20"
    },
    {
      name: "insanity 103",
      group_id: "2",
      class_date: "2020-04-28",
      start_time: "5:30pm",
      duration: "30",
      intensity_level: "3",
      location: "Austin",
      current_size: "2",
      max_size: "10"
    },

    {
      name: "ripped 101",
      group_id: "3",
      class_date: "2020-05-25",
      start_time: "3:30pm",
      duration: "30",
      intensity_level: "1",
      location: "Austin",
      current_size: "2",
      max_size: "30"
    },
    {
      name: "ripped 102",
      group_id: "3",
      class_date: "2020-05-26",
      start_time: "4:30pm",
      duration: "30",
      intensity_level: "2",
      location: "Austin",
      current_size: "2",
      max_size: "20"
    },
    {
      name: "ripped 103",
      group_id: "3",
      class_date: "2020-05-27",
      start_time: "5:30pm",
      duration: "30",
      intensity_level: "3",
      location: "Austin",
      current_size: "2",
      max_size: "10"
    }
  ]);
};
