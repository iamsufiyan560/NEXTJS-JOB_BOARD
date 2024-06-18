import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import Select from "./ui/select";
import FormSubmitButton from "./FormSubmitButton";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";
import { jobTypes } from "@/lib/job-types";
import { jobFilterSchema } from "@/lib/validation";

async function filterJobs(formData: FormData) {
  "use server";

  const values = Object.fromEntries(formData.entries());

  const { q, type, location, remote } = jobFilterSchema.parse(values);

  const searchParams = new URLSearchParams({
    ...(q && { q: q.trim() }),
    ...(type && { type }),
    ...(location && { location }),
    ...(remote && { remote: "true" }),
  });

  redirect(`/?${searchParams.toString()}`);
}

export default async function JobFilterSidebar() {
  const distinctLocations = (await prisma.job
    .findMany({
      where: { approved: true },
      select: { location: true },
      distinct: ["location"],
    })
    .then((locations) =>
      locations.map(({ location }) => location).filter(Boolean),
    )) as string[];

  return (
    <>
      <aside className="sticky top-0 h-fit rounded-lg border bg-background p-4 md:w-[260px]">
        <form action={filterJobs}>
          <div className="space-y-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="q">Search</Label>
              <Input id="q" name="q" placeholder="Title, company, etc." />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="type">Type</Label>
              <Select id="type" name="type">
                <option value="">All types</option>
                {jobTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </Select>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="location">Location</Label>
              <Select id="location" name="location" defaultValue="">
                <option value="">All locations</option>
                {distinctLocations.map((location) => (
                  <option value={location} key={location}>
                    {location}
                  </option>
                ))}
              </Select>
            </div>
            <div className="flex items-center gap-2">
              <input
                id="remote"
                name="remote"
                type="checkbox"
                className="scale-125 accent-black"
              />
              <Label htmlFor="remote">Remote jobs</Label>
            </div>
            <FormSubmitButton className="w-full">Filter jobs</FormSubmitButton>
          </div>
        </form>
      </aside>
    </>
  );
}
