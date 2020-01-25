import bs from "taskr-build/fw/servor";
let mode = "dev";
let dest = "dist";

export async function html(task) {
  await task.source("src/html/index.html").target(dest);
}

export async function ts(task) {
  await task
    .source("src/ts/main.tsx")
    .build({
      fw: "react",
      env: mode
    })
    .target(dest);
}


// mode development
export async function dev(task) {
  await task.parallel(["ts", "html"]);
  await task.watch("src/ts/**/*.*", "ts");
  mode == "dev" &&
    bs.start({
      root: dest
    });
}


// mode production
export async function prod(task) {
  mode = "prod";
  dest = "bundle";
  await task.serial(["ts", "html"]);
}
