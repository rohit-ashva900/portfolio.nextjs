"use client";
import { useState } from "react";
import profile from "@/data/profile";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle"|"ok"|"error">("idle");

  return (
    <section className="grid gap-6 md:grid-cols-2">
      <div className="card p-6">
        <h1 className="text-2xl font-bold">Let’s work together</h1>
        <p className="mt-2 text-slate-600 dark:text-slate-400">
          Have a data engineering challenge or project in mind? Drop me a message.
        </p>
        <div className="mt-6 grid gap-3">
          <a className="btn" href={`mailto:${profile.email}`}>Email me</a>
          <a className="btn" href={profile.social.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="btn" href={profile.social.github} target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>

      <form
        className="card p-6 space-y-4"
        onSubmit={async (e) => {
          e.preventDefault();
          const formEl = e.currentTarget as HTMLFormElement;
          const formData = new FormData(formEl);
          const res = await fetch("/api/contact", { method: "POST", body: formData });
          setStatus(res.ok ? "ok" : "error");
          if (res.ok) formEl.reset();
        }}
      >
        <div>
          <label className="mb-1 block text-sm" htmlFor="name">Name</label>
          <input id="name" name="name" required
            className="w-full rounded-xl border border-white/10 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>
        <div>
          <label className="mb-1 block text-sm" htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required
            className="w-full rounded-xl border border-white/10 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>
        <div>
          <label className="mb-1 block text-sm" htmlFor="message">Message</label>
          <textarea id="message" name="message" required rows={5}
            className="w-full resize-y rounded-xl border border-white/10 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
        </div>
        <button className="btn" type="submit">Send</button>

        <div aria-live="polite">
          {status === "ok" && (
            <p className="text-sm text-green-600 dark:text-green-400">Thanks! I’ll get back to you soon.</p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-600 dark:text-red-400">Something went wrong. Please try again.</p>
          )}
        </div>
      </form>
    </section>
  );
}
