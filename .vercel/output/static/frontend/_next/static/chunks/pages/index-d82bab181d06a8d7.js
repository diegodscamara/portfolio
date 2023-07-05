(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    8312: function (n, e, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return t(3020);
        },
      ]);
    },
    3020: function (n, e, t) {
      "use strict";
      t.r(e),
        t.d(e, {
          default: function () {
            return eI;
          },
        });
      var i = t(5893),
        r = t(7297),
        a = t(9521);
      function s() {
        let n = (0, r.Z)([
          "\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  gap: 32px;\n  width: 100%;\n\n  img {\n    width: 100%;\n    height: 100%;\n  }  \n\n  @media only screen and (max-width: 1024px) {\n    flex-direction: column-reverse;\n  }\n",
        ]);
        return (
          (s = function () {
            return n;
          }),
          n
        );
      }
      function o() {
        let n = (0, r.Z)([
          "\n  display: flex;\n  flex-direction: column;\n  gap: 32px;\n\n  @media only screen and (max-width: 1024px) {\n    gap: 16px;\n  }\n",
        ]);
        return (
          (o = function () {
            return n;
          }),
          n
        );
      }
      function l() {
        let n = (0, r.Z)([
          "\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 1rem;\n",
        ]);
        return (
          (l = function () {
            return n;
          }),
          n
        );
      }
      function c() {
        let n = (0, r.Z)([
          "\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  font-size: var(--font-m-400);\n  color: var(--button-color);\n",
        ]);
        return (
          (c = function () {
            return n;
          }),
          n
        );
      }
      function d() {
        let n = (0, r.Z)(["\n  color: var(--text-color);\n"]);
        return (
          (d = function () {
            return n;
          }),
          n
        );
      }
      let A = a.ZP.section(s()),
        g = a.ZP.div(o()),
        h = a.ZP.div(l()),
        u = a.ZP.h3(c()),
        p = a.ZP.span(d());
      var m = {
        src: "/frontend//_next/static/media/about.1ad6636f.svg",
        height: 392,
        width: 656,
        blurWidth: 0,
        blurHeight: 0,
      };
      function f() {
        let n = (0, r.Z)([
          "\n    background: var(--primary-color);\n    color: var(--gray-900);\n    box-shadow: var(--shadow-10);\n\n    svg path {\n        transition: all 0.3s ease-in-out;\n        fill: var(--gray-900);\n      }\n\n    &:hover {\n      background-color: var(--primary-variant-color);\n      box-shadow: var(--shadow-20);\n    }\n  ",
        ]);
        return (
          (f = function () {
            return n;
          }),
          n
        );
      }
      function b() {
        let n = (0, r.Z)([
          "\n    color: var(--primary-color);\n    border: 1px solid var(--primary-color);\n    background-color: transparent;\n\n    &:hover {\n      background: rgba(119, 245, 255, 0.3);\n    }\n  ",
        ]);
        return (
          (b = function () {
            return n;
          }),
          n
        );
      }
      function x() {
        let n = (0, r.Z)([
          "\n    border: none;\n    background-color: transparent;\n    color: var(--gray-50);\n    cursor: default;\n    padding: var(--spacing-s-200) 0;\n\n    &:hover {\n      color: var(--primary-color);\n    }\n  ",
        ]);
        return (
          (x = function () {
            return n;
          }),
          n
        );
      }
      function w() {
        let n = (0, r.Z)([
          "\n    border: 1px solid var(--gray-200);\n    color: var(--gray-200);\n    background-color: transparent;\n    box-shadow: var(--shadow-10);\n    cursor: default;\n\n    &:hover {\n      box-shadow: var(--shadow-20);\n      background: rgba(119, 245, 255, 0.3);\n      border: 1px solid var(--primary-variant-color);\n    }\n  ",
        ]);
        return (
          (w = function () {
            return n;
          }),
          n
        );
      }
      function v() {
        let n = (0, r.Z)([
          "\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: var(--spacing-s-200);\n  padding: var(--spacing-s-200) var(--spacing-m-500);\n  width: fit-content;\n  border-radius: var(--border-radius-sm);\n  font-weight: var(--font-weight-bold);\n  transition: all 0.3s ease-in-out;\n  cursor: pointer;\n  \n  a {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    gap: var(--spacing-s-200);\n  }\n  ",
          "    \n",
        ]);
        return (
          (v = function () {
            return n;
          }),
          n
        );
      }
      let C = {
          filled: (0, a.iv)(f()),
          outlined: (0, a.iv)(b()),
          inline: (0, a.iv)(x()),
          skill: (0, a.iv)(w()),
        },
        j = a.ZP.button(v(), (n) => C[n.variant || "filled"]),
        y = (n) => {
          let { variant: e, children: t } = n;
          return (0, i.jsx)(j, { variant: e, children: t });
        },
        E = () =>
          (0, i.jsx)("svg", {
            width: "14",
            height: "14",
            viewBox: "0 0 14 14",
            fill: "#00E7F9",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, i.jsx)("path", {
              d: "M5.72048 0.635975C5.3559 0.635975 5.09548 0.922433 5.09548 1.26097V5.63596H2.80382C2.33507 5.63596 2.1007 6.20888 2.43924 6.54742L6.39756 10.5057C6.57985 10.688 6.9184 10.688 7.10069 10.5057L11.059 6.54742C11.3976 6.20888 11.1632 5.63596 10.6944 5.63596H8.42881V1.26097C8.42881 0.922433 8.14235 0.635975 7.80381 0.635975H5.72048ZM13.4288 10.4276C13.4288 10.0891 13.1423 9.80262 12.8038 9.80262H8.97568L7.69964 11.0787C7.17881 11.6255 6.31944 11.6255 5.79861 11.0787L4.52257 9.80262H0.720495C0.355912 9.80262 0.0954962 10.0891 0.0954962 10.4276V13.3443C0.0954962 13.7089 0.355912 13.9693 0.720495 13.9693H12.8038C13.1423 13.9693 13.4288 13.7089 13.4288 13.3443V10.4276ZM10.1996 12.7193C10.1996 13.0057 9.96526 13.2401 9.67881 13.2401C9.39235 13.2401 9.15797 13.0057 9.15797 12.7193C9.15797 12.4328 9.39235 12.1984 9.67881 12.1984C9.96526 12.1984 10.1996 12.4328 10.1996 12.7193ZM11.8663 12.7193C11.8663 13.0057 11.6319 13.2401 11.3455 13.2401C11.059 13.2401 10.8246 13.0057 10.8246 12.7193C10.8246 12.4328 11.059 12.1984 11.3455 12.1984C11.6319 12.1984 11.8663 12.4328 11.8663 12.7193Z",
              fill: "#00E7F9",
            }),
          }),
        U = (n) =>
          (0, i.jsxs)("svg", {
            width: "21",
            height: "21",
            viewBox: "0 0 21 21",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            xmlnsXlink: "http://www.w3.org/1999/xlink",
            children: [
              (0, i.jsx)("rect", {
                x: "0.527771",
                y: "0.802612",
                width: "20",
                height: "20",
                fill: "url(#pattern0)",
              }),
              (0, i.jsxs)("defs", {
                children: [
                  (0, i.jsx)("pattern", {
                    id: "pattern0",
                    patternContentUnits: "objectBoundingBox",
                    width: "1",
                    height: "1",
                    children: (0, i.jsx)("use", {
                      xlinkHref: "#image0_2_245",
                      transform: "scale(0.02)",
                    }),
                  }),
                  (0, i.jsx)("image", {
                    id: "image0_2_245",
                    width: "50",
                    height: "50",
                    xlinkHref:
                      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA1klEQVR4nO2ZMQrCQBBFxxNGJGKhZ7dQMhPRA8xHIWIQqxTZZSam+A8CaR78ZV+ViBDyBwx7MX+IopPOt2lOKsOwEfO7GIbxUX+K4RDuLILi9hs1d1iNk4767jtk/rAaZxHU24lhL1GcQp1FUB6m5c2kw8ycmeXDzJyZ5cPMnJnlw8ycmeXDzHyFmX2+rEyN6nAMdVLhIcCbiIM5gTnFwZzAnOJgTmBOcTAnMKc4mBNWklPvTfGPzRonHcO1eFCNk45CiwfVOOn03ojhIorz+J7lECKr5Q1q4DQ39q0zmAAAAABJRU5ErkJggg==",
                  }),
                ],
              }),
            ],
          });
      var k = t(5675),
        D = t.n(k),
        S = t(1664),
        Z = t.n(S);
      let R = () =>
        (0, i.jsxs)(A, {
          id: "About",
          children: [
            (0, i.jsx)(D(), {
              src: m,
              alt: "Front End Developer",
              width: 600,
              height: 600,
            }),
            (0, i.jsxs)(g, {
              children: [
                (0, i.jsxs)(h, {
                  children: [
                    (0, i.jsx)(U, {}),
                    (0, i.jsx)(u, { children: "About Me" }),
                  ],
                }),
                (0, i.jsxs)(p, {
                  children: [
                    "As a Front End Developer, I have a passion for creating user-friendly interfaces using technologies such as ReactJS, NextJS, JavaScript, TypeScript, HTML, CSS, and my design skills extend beyond coding, as I'm proficient in Figma to bring my visions to life. I integrate frontend systems with content management systems and have experience with both GraphQL and REST APIs. With expertise in Scrum, Kanban, Agile, and code versioning tools.",
                    (0, i.jsx)("br", {}),
                    (0, i.jsx)("br", {}),
                    "Additionally, I am proactive, skilled in conflict resolution, possess strong analytical and problem-solving skills, and have excellent communication skills that ensure project success. I work collaboratively as part of a team and mentor junior developers, while also dedicating myself to continuous improvement and making web applications more efficient as I'm always exploring new technologies to stay ahead of the curve.",
                  ],
                }),
                (0, i.jsx)(y, {
                  variant: "outlined",
                  children: (0, i.jsxs)(Z(), {
                    href: "documents/resume.pdf",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    title: "Open resume in new tab",
                    children: ["Download resume", (0, i.jsx)(E, {})],
                  }),
                }),
              ],
            }),
          ],
        });
      function L() {
        let n = (0, r.Z)([""]);
        return (
          (L = function () {
            return n;
          }),
          n
        );
      }
      function Q() {
        let n = (0, r.Z)([""]);
        return (
          (Q = function () {
            return n;
          }),
          n
        );
      }
      function B() {
        let n = (0, r.Z)([
          "\n  display: flex;\n  width: 470px;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  gap: var(--spacing-s-300);\n\n  @media (max-width: 600px) {\n    width: 100%;\n  }\n",
        ]);
        return (
          (B = function () {
            return n;
          }),
          n
        );
      }
      function H() {
        let n = (0, r.Z)([
          "\n  padding: var(--spacing-s-200) var(--spacing-m-400);\n  background-color: transparent;\n  align-self: stretch;\n  border-radius: var(--spacing-s-100);\n  border: 1px solid var(--gray-200);\n  color: var(--gray-200);\n",
        ]);
        return (
          (H = function () {
            return n;
          }),
          n
        );
      }
      function V() {
        let n = (0, r.Z)(["\n  ", ";\n"]);
        return (
          (V = function () {
            return n;
          }),
          n
        );
      }
      function P() {
        let n = (0, r.Z)(["\n  ", ";\n"]);
        return (
          (P = function () {
            return n;
          }),
          n
        );
      }
      function M() {
        let n = (0, r.Z)(["\n  color: var(--red);\n"]);
        return (
          (M = function () {
            return n;
          }),
          n
        );
      }
      function I() {
        let n = (0, r.Z)([
          "\n  color: var(--primary-color);\n  text-align: center;\n  font-weight: var(--font-weight-bold);\n  width: 100%;\n",
        ]);
        return (
          (I = function () {
            return n;
          }),
          n
        );
      }
      let N = a.ZP.section(L()),
        F = a.ZP.h3(Q()),
        T = a.ZP.form(B()),
        z = (0, a.iv)(H()),
        G = a.ZP.input(V(), z),
        W = a.ZP.textarea(P(), z),
        O = a.ZP.span(M()),
        J = a.ZP.span(I());
      var K = t(7294),
        Y = t(6154);
      function X() {
        let [n, e] = (0, K.useState)({ email: "", subject: "", message: "" }),
          [t, r] = (0, K.useState)(!1),
          [a, s] = (0, K.useState)(""),
          o = (n) => {
            n.persist(), e((e) => ({ ...e, [n.target.id]: n.target.value }));
          },
          l = () =>
            (!!n.email && !!n.subject && !!n.message) ||
            (s("Please fill in all fields"), !1),
          c = (e) => {
            e.preventDefault(),
              l() &&
                Y.Z.post("https://formbold.com/s/ozV0l", n)
                  .then(() => {
                    r(!0), s("");
                  })
                  .catch(() => {
                    r(!1), s("An error occurred. Please try again.");
                  });
          };
        return (0, i.jsxs)(N, {
          id: "Contact",
          children: [
            (0, i.jsx)(F, { children: "Contact Me" }),
            (0, i.jsx)(T, {
              onSubmit: c,
              children: t
                ? (0, i.jsx)(J, { children: "Form submitted successfully!" })
                : (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsx)(G, {
                        onChange: o,
                        value: n.email,
                        id: "email",
                        type: "email",
                        name: "email",
                        placeholder: "Email",
                        required: !0,
                      }),
                      (0, i.jsx)(G, {
                        onChange: o,
                        value: n.subject,
                        id: "subject",
                        type: "text",
                        name: "subject",
                        placeholder: "Subject",
                        required: !0,
                      }),
                      (0, i.jsx)(W, {
                        onChange: o,
                        value: n.message,
                        id: "message",
                        name: "message",
                        placeholder: "Type your message",
                        rows: 5,
                        required: !0,
                      }),
                      (0, i.jsx)(y, {
                        variant: "filled",
                        type: "submit",
                        children: "Send Message",
                      }),
                      a && (0, i.jsx)(O, { children: a }),
                    ],
                  }),
            }),
          ],
        });
      }
      function q() {
        let n = (0, r.Z)([""]);
        return (
          (q = function () {
            return n;
          }),
          n
        );
      }
      function _() {
        let n = (0, r.Z)([""]);
        return (
          (_ = function () {
            return n;
          }),
          n
        );
      }
      function $() {
        let n = (0, r.Z)([
          "\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  padding: var(--spacing-m-400);\n  gap: var(--spacing-s-300);\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(55.27deg, rgba(240, 240, 240, 0.04) 0%, rgba(240, 240, 240, 0) 100%);\n  backdrop-filter: var(--background-blur);\n  border-radius: var(--border-radius-sm);\n  box-shadow: var(--shadow-10);\n\n  &:hover {\n    background: linear-gradient(55.27deg, rgba(240, 240, 240, 0.06) 0%, rgba(240, 240, 240, 0) 100%);\n    box-shadow: var(--shadow-20);\n  }\n",
        ]);
        return (
          ($ = function () {
            return n;
          }),
          n
        );
      }
      function nn() {
        let n = (0, r.Z)([
          "\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  width: 100%;\n  gap: var(--spacing-m-400);\n  border-bottom: 1px solid var(--gray-800);\n  padding-bottom: ",
          ";\n",
        ]);
        return (
          (nn = function () {
            return n;
          }),
          n
        );
      }
      function ne() {
        let n = (0, r.Z)([
          '\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0px;\n  gap: var(--spacing-s-200);\n  width: 100%;\n  cursor: pointer;\n\n  svg[alt="Toggle icon"] {\n    transition: var(--transition-03);\n    transform: ',
          "\n  }\n",
        ]);
        return (
          (ne = function () {
            return n;
          }),
          n
        );
      }
      function nt() {
        let n = (0, r.Z)([
          "\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  flex-wrap: wrap;\n  padding: 0px;\n  gap: var(--spacing-s-300);\n  min-height: auto;\n",
        ]);
        return (
          (nt = function () {
            return n;
          }),
          n
        );
      }
      function ni() {
        let n = (0, r.Z)([""]);
        return (
          (ni = function () {
            return n;
          }),
          n
        );
      }
      function nr() {
        let n = (0, r.Z)([
          "\n  height: 100%;\n  font-style: normal;\n  font-weight: var(--font-weight-regular);\n  font-size: var(--font-s-100);\n  color: var(--gray-200);\n",
        ]);
        return (
          (nr = function () {
            return n;
          }),
          n
        );
      }
      function na() {
        let n = (0, r.Z)([
          "\n  display: flex;\n  height: ",
          ";\n  overflow: hidden;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: var(--spacing-s-300);\n  transition: var(--transition-03);\n",
        ]);
        return (
          (na = function () {
            return n;
          }),
          n
        );
      }
      function ns() {
        let n = (0, r.Z)(["\n  color: var(--gray-100);\n"]);
        return (
          (ns = function () {
            return n;
          }),
          n
        );
      }
      function no() {
        let n = (0, r.Z)(["\n  color: var(--gray-100);\n"]);
        return (
          (no = function () {
            return n;
          }),
          n
        );
      }
      function nl() {
        let n = (0, r.Z)(["\n  display: flex;\n  flex-direction: column;\n"]);
        return (
          (nl = function () {
            return n;
          }),
          n
        );
      }
      function nc() {
        let n = (0, r.Z)([
          "\n  list-style-type: disc;\n  list-style-position : inside;\n  color: var(--gray-100);\n",
        ]);
        return (
          (nc = function () {
            return n;
          }),
          n
        );
      }
      let nd = a.ZP.section(q()),
        nA = a.ZP.h3(_()),
        ng = a.ZP.div($()),
        nh = a.ZP.div(nn(), (n) => (n.open ? "var(--spacing-m-400)" : "0")),
        nu = a.ZP.header(ne(), (n) => (n.open ? "rotate(-180deg)" : "unset")),
        np = a.ZP.div(nt()),
        nm = a.ZP.h5(ni()),
        nf = a.ZP.span(nr()),
        nb = a.ZP.div(na(), (n) => (n.open ? "auto" : "0")),
        nx = a.ZP.h5(ns()),
        nw = a.ZP.span(no()),
        nv = a.ZP.ul(nl()),
        nC = a.ZP.li(nc());
      var nj = {
          src: "/frontend//_next/static/media/arrow-up.9a5bdaba.svg",
          height: 17,
          width: 18,
          blurWidth: 0,
          blurHeight: 0,
        },
        ny = {
          src: "/frontend//_next/static/media/emr.770b14f0.svg",
          height: 48,
          width: 48,
          blurWidth: 0,
          blurHeight: 0,
        },
        nE = {
          src: "/frontend//_next/static/media/genetec.f79309dd.svg",
          height: 48,
          width: 48,
          blurWidth: 0,
          blurHeight: 0,
        },
        nU = {
          src: "/frontend//_next/static/media/nsh.89776527.svg",
          height: 48,
          width: 48,
          blurWidth: 0,
          blurHeight: 0,
        };
      let nk = () => [
          {
            logo: nE,
            company: "Genetec",
            details: "Montreal, Canada - (Oct 2022 - Present)",
            position: "Front End Developer",
            intro:
              "I am responsible for building and maintaining web applications that are aligned with Genetec's web design guidelines and design system. My key responsibilities include:",
            responsibilities: [
              "Building and maintaining web applications using JavaScript, CSS, and HTML",
              "Connecting the frontend with content management systems using REST APIs",
              "Customizing, troubleshooting, and documenting the publishing tools for Genetec",
              "Developing and maintaining style sheets and specializations as needed",
              "Identifying and implementing web best practices, using Scrum, Kanban, and Agile methodologies",
              "Updating the publishing tools with current releases, using Azure DevOps",
              "Testing and upgrading the DITA Open Toolkit (DITA-OT) for custom plugins, with proficiency in XML",
              "Participating in code review and approval workflows utilizing Git",
              "Implementing continuous improvement initiatives for our web applications",
              "Improving user experience (UX) design and user interface (UI) using Figma for design",
              "Training members of the Unified Content Services Department on the publishing tools",
              "Participating in analysis and planning meetings, and utilizing strong communication skills.",
            ],
          },
          {
            logo: ny,
            company: "Eu M\xe9dico Residente",
            details: "Recife, Brazil – (Jun 2022 - Oct 2022)",
            position: "Front End Developer",
            intro:
              "I developed and maintained a Learning Management System (LMS) that utilized innovative technologies and teaching methodologies. My responsibilities included:",
            responsibilities: [
              "Creating the LMS using NextJS and TypeScript to host digital courses for doctors, leveraging React Hooks to improve performance and modularity.",
              "Converting Figma designs to front-end code using Styled Components and Chakra UI, ensuring that the LMS adhered to the highest design standards.",
              "Collaborating with backend developers to develop dynamic components and web pages using GraphQL, Node.js (Express), and AWS.",
              "Mentoring junior developers and collaborating with senior engineers to establish roadmaps and resource priorities, while ensuring compliance with Git and GitFlow source control management best practices.",
              "Following software workflow best practices, such as code reviews, code standard maintenance and improvement, and agile methodology, utilizing Azure DevOps to streamline project management.",
            ],
          },
          {
            logo: nU,
            company: "NSH Technologies",
            details: "S\xe3o Paulo, Brazil – (Jul 2021 - Jun 2022)",
            position: "Front End Developer",
            intro:
              "I contributed to the company's focus on customer experience. My responsibilities included:",
            responsibilities: [
              "Creating advanced and mobile websites and applications using ReactJS, KnockoutJS, HTML, CSS, JavaScript, Node.js with npm and yarn, and REST APIs",
              "Coordinating with stakeholders and designers to ensure that requirements and assets met best practices for responsive UI and performance expectations using JSON and Adobe XD",
              "Leading the UI component refactoring initiative, which significantly reduced code complexity and duplication, utilizing Styled Components, TailwindCSS, Bootstrap, and Less",
              "Collaborating with the project manager and senior developer to share ideas, demonstrate code, troubleshoot, and fix bugs, utilizing Git, GitFlow, GitLab, and BitBucket",
              "Using Kanban and Jira to manage workflows and improve team collaboration",
            ],
          },
        ],
        nD = () => {
          let [n, e] = (0, K.useState)([
              !0,
              ...Array(nk().length - 1).fill(!1),
            ]),
            t = (t) => {
              let i = [...n];
              (i[t] = !i[t]), e(i);
            };
          return (0, i.jsxs)(nd, {
            id: "Experience",
            children: [
              (0, i.jsx)(nA, { children: "Experience" }),
              (0, i.jsx)(ng, {
                children: nk().map((e, r) =>
                  (0, i.jsxs)(
                    nh,
                    {
                      open: n[r],
                      children: [
                        (0, i.jsxs)(nu, {
                          onClick: () => t(r),
                          open: n[r],
                          children: [
                            (0, i.jsxs)(np, {
                              children: [
                                (0, i.jsx)(D(), {
                                  src: e.logo,
                                  alt: e.company,
                                  width: 24,
                                  height: 24,
                                }),
                                (0, i.jsx)(nm, { children: e.company }),
                                (0, i.jsx)(nf, { children: e.details }),
                              ],
                            }),
                            (0, i.jsx)(D(), {
                              src: nj,
                              alt: "Toggle icon",
                              width: 12,
                              height: 12,
                            }),
                          ],
                        }),
                        (0, i.jsxs)(nb, {
                          open: n[r],
                          children: [
                            (0, i.jsx)(nx, { children: e.position }),
                            (0, i.jsx)(nw, { children: e.intro }),
                            (0, i.jsx)(nv, {
                              children: e.responsibilities.map((n) =>
                                (0, i.jsx)(nC, { children: n }, n)
                              ),
                            }),
                          ],
                        }),
                      ],
                    },
                    e.company
                  )
                ),
              }),
            ],
          });
        },
        nS = () =>
          (0, i.jsx)("footer", {
            children: (0, i.jsx)(Z(), {
              href: "/",
              children: "\xa9 2023 Diego C\xe2mara",
            }),
          });
      var nZ = t(9008),
        nR = t.n(nZ);
      function nL() {
        let n = (0, r.Z)([
          "\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  padding: 0px var(--spacing-m-500);\n  height: var(--spacing-m-600);\n  position: fixed;\n  width: 100%;\n  background-color: var(--gray-900);\n  box-shadow: var(--shadow-20);\n  z-index: 1;\n\n  @media screen and (max-width: 1024px) {\n    padding: 0px var(--spacing-s-300);\n  }\n",
        ]);
        return (
          (nL = function () {
            return n;
          }),
          n
        );
      }
      function nQ() {
        let n = (0, r.Z)([
          "\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0px;\n  height: 100%;\n  position: relative;\n",
        ]);
        return (
          (nQ = function () {
            return n;
          }),
          n
        );
      }
      function nB() {
        let n = (0, r.Z)([
          "\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: center;\n  padding: 0px;\n  gap: var(--spacing-m-400);\n\n  @media only screen and  (max-width: 1200px) {\n    display: none;\n  }\n",
        ]);
        return (
          (nB = function () {
            return n;
          }),
          n
        );
      }
      function nH() {
        let n = (0, r.Z)([
          '\n  display: flex;\n  align-items: center;\n  text-align: right;\n  position: relative;\n  transition: var(--transition-03);\n\n  &:hover,\n  &:active,\n  &:focus {\n    color: var(--primary-color);\n  }\n\n  &::before {\n    content: "";\n    display: block;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 0;\n    height: 2px;\n    border-radius: var(--border-radius-sm);\n    background-color: var(--primary-color);\n    transition: width 0.3s ease-in-out;\n  }\n\n  &:hover::before,\n  &:focus::before,\n  &:active::before {\n    width: 100%;\n  }\n',
        ]);
        return (
          (nH = function () {
            return n;
          }),
          n
        );
      }
      function nV() {
        let n = (0, r.Z)([
          "\n  background-color: transparent;\n  display: none;\n\n  @media only screen and  (max-width: 1200px) {\n    display: flex;\n  }\n\n  svg {\n    height: 1.5rem;\n    width: 1.5rem;\n    \n    &:hover {\n      path {\n        transition: all 0.3s ease-in-out;\n        color: var(--primary-color);\n      }\n    }\n  }\n",
        ]);
        return (
          (nV = function () {
            return n;
          }),
          n
        );
      }
      function nP() {
        let n = (0, r.Z)([
          "\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  justify-content: flex-start;\n  align-items: center;\n  gap: var(--spacing-m-400);\n  padding: var(--spacing-m-600) var(--spacing-s-300);\n  position: fixed;\n  top: var(--spacing-m-600);\n  right: 0;\n  height: 100vh;\n  border-radius: var(--border-radius-sm);\n  backdrop-filter: var(--background-blur);\n  box-shadow: var(--shadow-10);\n  transform: ",
          ";\n  transition: transform 0.5s ease-in-out;\n\n  &:hover {\n    background: linear-gradient(\n      55.27deg,\n      rgba(240, 240, 240, 0.04) 0%,\n      rgba(240, 240, 240, 0) 100%\n    );\n    box-shadow: var(--shadow-20);\n  }\n\n  @media only screen and (min-width: 1200px) {\n    display: none;\n  }\n",
        ]);
        return (
          (nP = function () {
            return n;
          }),
          n
        );
      }
      let nM = a.ZP.header(nL()),
        nI = a.ZP.section(nQ()),
        nN = a.ZP.nav(nB()),
        nF = (0, a.ZP)(Z())(nH()),
        nT = a.ZP.button(nV()),
        nz = a.ZP.nav(nP(), (n) =>
          n.isOpen ? "translateX(0)" : "translateX(100%)"
        ),
        nG = () =>
          (0, i.jsxs)("svg", {
            width: "98",
            height: "39",
            viewBox: "0 0 98 39",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, i.jsx)("path", {
                d: "M7.15457 27.5224L0.419031 20.1896L7.15457 12.8568H14.2883L7.51955 20.1896L14.2883 27.5224H7.15457ZM83.3089 12.8568H90.4426L97.1781 20.1896L90.4426 27.5224H83.3089L90.0776 20.1896L83.3089 12.8568Z",
                fill: "#00E7F9",
              }),
              (0, i.jsx)("path", {
                d: "M27.5862 8.51025C30.0415 8.51025 32.1872 8.99689 34.0231 9.97017C35.8591 10.9435 37.2748 12.3149 38.2702 14.0845C39.2877 15.832 39.7964 17.856 39.7964 20.1564C39.7964 22.4348 39.2877 24.4588 38.2702 26.2284C37.2748 27.998 35.848 29.3694 33.9899 30.3427C32.154 31.316 30.0194 31.8026 27.5862 31.8026H18.8599V8.51025H27.5862ZM27.2212 26.892C29.3669 26.892 31.0369 26.3058 32.2314 25.1334C33.4259 23.9611 34.0231 22.3021 34.0231 20.1564C34.0231 18.0108 33.4259 16.3407 32.2314 15.1463C31.0369 13.9518 29.3669 13.3545 27.2212 13.3545H24.5336V26.892H27.2212ZM42.005 20.1233C42.005 17.8228 42.5027 15.7767 43.4981 13.985C44.4935 12.1711 45.876 10.7665 47.6456 9.77109C49.4373 8.75357 51.4613 8.24481 53.7175 8.24481C56.4825 8.24481 58.8494 8.97477 60.818 10.4347C62.7867 11.8946 64.1029 13.8854 64.7665 16.4071H58.5286C58.0641 15.4338 57.4005 14.6928 56.5378 14.184C55.6973 13.6753 54.735 13.4209 53.6512 13.4209C51.9037 13.4209 50.488 14.0292 49.4041 15.2458C48.3202 16.4624 47.7783 18.0882 47.7783 20.1233C47.7783 22.1583 48.3202 23.7841 49.4041 25.0007C50.488 26.2173 51.9037 26.8256 53.6512 26.8256C54.735 26.8256 55.6973 26.5712 56.5378 26.0625C57.4005 25.5537 58.0641 24.8127 58.5286 23.8394H64.7665C64.1029 26.3611 62.7867 28.3519 60.818 29.8118C58.8494 31.2496 56.4825 31.9685 53.7175 31.9685C51.4613 31.9685 49.4373 31.4708 47.6456 30.4754C45.876 29.4579 44.4935 28.0533 43.4981 26.2616C42.5027 24.4698 42.005 22.4237 42.005 20.1233Z",
                fill: "var(--gray-50)",
              }),
              (0, i.jsx)("path", {
                d: "M80.8826 0.28161L71.9904 38.0073H66.5157L75.4079 0.28161H80.8826Z",
                fill: "#8257E6",
              }),
            ],
          }),
        nW = (n) => {
          let { href: e, children: t, onClick: r } = n;
          return (0, i.jsx)(nF, {
            href: e,
            onClick: r,
            title: "".concat(t, " section"),
            "aria-label": "".concat(t, " section"),
            className: "".concat(t, " section"),
            children: t,
          });
        },
        nO = () => {
          let [n, e] = (0, K.useState)(!1),
            t = () => e(!n);
          (0, K.useEffect)(() => {
            let n = (n) => {
              let t = n.target;
              t.closest("[data-popover]") || e(!1);
            };
            return (
              document.addEventListener("click", n),
              () => document.removeEventListener("click", n)
            );
          }, []);
          let r = [
            { href: "#About", label: "About" },
            { href: "#Skills", label: "Skills" },
            { href: "#Experience", label: "Experience" },
            { href: "#Projects", label: "Projects" },
            { href: "#Contact", label: "Contact" },
          ];
          return (0, i.jsx)(nM, {
            children: (0, i.jsxs)(nI, {
              children: [
                (0, i.jsx)(Z(), {
                  href: "/",
                  title: "Go to homepage",
                  "arial-label": "Go to homepage",
                  children: (0, i.jsx)(nG, {}),
                }),
                (0, i.jsxs)(nN, {
                  children: [
                    r.map((n) => {
                      let { href: e, label: t } = n;
                      return (0, i.jsx)(nW, { href: e, children: t }, t);
                    }),
                    (0, i.jsx)(y, {
                      variant: "outlined",
                      children: (0, i.jsxs)(Z(), {
                        href: "documents/resume.pdf",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        title: "Open resume in new tab",
                        children: ["Download resume", (0, i.jsx)(E, {})],
                      }),
                    }),
                  ],
                }),
                (0, i.jsx)(nT, {
                  onClick: t,
                  "aria-label": "Toggle menu",
                  "aria-expanded": n,
                  "data-popover": !0,
                  children: n
                    ? (0, i.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "h-6 w-6 z-10 relative hover:text-primary",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: (0, i.jsx)("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 2,
                          d: "M6 18L18 6M6 6l12 12",
                        }),
                      })
                    : (0, i.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "h-6 w-6 hover:text-primary",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: (0, i.jsx)("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 2,
                          d: "M4 6h16M4 12h16M4 18h16",
                        }),
                      }),
                }),
                (0, i.jsxs)(nz, {
                  isOpen: n,
                  "data-popover": !0,
                  children: [
                    r.map((n) => {
                      let { href: e, label: r } = n;
                      return (0, i.jsx)(
                        nW,
                        { href: e, onClick: t, children: r },
                        e
                      );
                    }),
                    (0, i.jsx)(y, {
                      variant: "outlined",
                      children: (0, i.jsxs)(Z(), {
                        href: "documents/resume.pdf",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        title: "Open resume in new tab",
                        children: ["Download resume", (0, i.jsx)(E, {})],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          });
        };
      function nJ() {
        let n = (0, r.Z)([
          "\n  display: flex;\n  text-align: left;\n  padding: calc(var(--spacing-l-700) + var(--spacing-m-600)) var(--spacing-m-500) var(--spacing-l-700) var(--spacing-m-500);\n\n  @media only screen and (max-width: 1024px) {\n  padding: var(--spacing-l-700) var(--spacing-s-300) var(--spacing-m-600) var(--spacing-s-300);\n  }\n",
        ]);
        return (
          (nJ = function () {
            return n;
          }),
          n
        );
      }
      function nK() {
        let n = (0, r.Z)([
          "\n  display: flex;\n  flex-direction: row;\n  gap: var(--spacing-m-500);\n  width: 100%;\n\n  @media only screen and (max-width: 1024px) {\n    flex-direction: column-reverse;\n    align-items: center;\n  }\n",
        ]);
        return (
          (nK = function () {
            return n;
          }),
          n
        );
      }
      function nY() {
        let n = (0, r.Z)([
          "\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: var(--spacing-m-500);\n  width: 70%;\n\n  &:last-child {\n    align-items: flex-end;\n    width: 30%;\n  }\n\n  img {\n    width: 100%;\n    height: 100%;\n  }\n\n  @media only screen and (max-width: 1024px) {\n    width: 100%;\n    align-items: center;\n    text-align: center;\n  }\n",
        ]);
        return (
          (nY = function () {
            return n;
          }),
          n
        );
      }
      function nX() {
        let n = (0, r.Z)(["\n  width: 100%;\n"]);
        return (
          (nX = function () {
            return n;
          }),
          n
        );
      }
      function nq() {
        let n = (0, r.Z)([
          "\n  color: var(--gray-100);\n  font-weight: var(--font-weight-regular);\n  width: 100%;\n",
        ]);
        return (
          (nq = function () {
            return n;
          }),
          n
        );
      }
      function n_() {
        let n = (0, r.Z)([
          "\n  display: block;\n  margin-top: var(--spacing-m-500);\n  animation: bounce 1s infinite;\n\n  svg {\n    width: var(--spacing-m-500);\n    height: var(--spacing-m-500);\n\n    &:hover {\n      transform: scale(1.1);\n    }\n  }\n\n  @keyframes bounce {\n    0% {\n      transform: translateY(0);\n    }\n    50% {\n      transform: translateY(-1rem);\n    }\n    100% {\n      transform: translateY(0);\n    }\n  }\n",
        ]);
        return (
          (n_ = function () {
            return n;
          }),
          n
        );
      }
      let n$ = a.ZP.section(nJ()),
        n0 = a.ZP.div(nK()),
        n2 = a.ZP.div(nY()),
        n1 = a.ZP.h1(nX()),
        n4 = a.ZP.h4(nq()),
        n3 = a.ZP.div(n_());
      var n8 = {
        src: "/frontend//_next/static/media/avatar.4dc9574f.svg",
        height: 421,
        width: 420,
        blurWidth: 0,
        blurHeight: 0,
      };
      let n6 = () =>
          (0, i.jsxs)("svg", {
            width: "41",
            height: "41",
            viewBox: "0 0 41 41",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, i.jsxs)("g", {
                clipPath: "url(#clip0_15_2378)",
                children: [
                  (0, i.jsx)("mask", {
                    id: "mask0_15_2378",
                    style: { maskType: "luminance" },
                    maskUnits: "userSpaceOnUse",
                    x: "11",
                    y: "0",
                    width: "19",
                    height: "29",
                    children: (0, i.jsx)("path", {
                      d: "M11.4653 0.984863H29.5486V28.2557H11.4653V0.984863Z",
                      fill: "white",
                    }),
                  }),
                  (0, i.jsx)("g", {
                    mask: "url(#mask0_15_2378)",
                    children: (0, i.jsx)("path", {
                      d: "M24.2257 2.17236H16.7882C15.6528 2.17236 14.6163 2.64632 13.8663 3.39632C13.1163 4.15153 12.6476 5.1932 12.6476 6.33903V22.2557C12.6476 23.4015 13.1163 24.438 13.8663 25.1984C14.6163 25.9536 15.6528 26.4172 16.7882 26.4172H24.2257C25.3611 26.4172 26.3976 25.9536 27.1476 25.1984C27.8976 24.438 28.3663 23.4015 28.3663 22.2557V6.33903C28.3663 5.1932 27.8976 4.15153 27.1476 3.39632C26.3976 2.64632 25.3611 2.17236 24.2257 2.17236ZM16.7882 0.984863H24.2257C25.6892 0.984863 27.0226 1.58382 27.9861 2.55778C28.9549 3.52653 29.5486 4.86507 29.5486 6.33903V22.2557C29.5486 23.7297 28.9549 25.0682 27.9861 26.0369C27.0226 27.0109 25.6892 27.6099 24.2257 27.6099H16.7882C15.3246 27.6099 13.9913 27.0109 13.0278 26.0369C12.0642 25.0682 11.4653 23.7297 11.4653 22.2557V6.33903C11.4653 4.86507 12.0642 3.52653 13.0278 2.55778C13.9913 1.58382 15.3246 0.984863 16.7882 0.984863Z",
                      fill: "#00E7F9",
                    }),
                  }),
                  (0, i.jsx)("path", {
                    d: "M21.1007 6.39636V11.5162H19.9132V6.39636H21.1007Z",
                    fill: "#00E7F9",
                  }),
                  (0, i.jsx)("path", {
                    d: "M19.9184 30.6932H21.0955V37.5214H19.9184V30.6932Z",
                    fill: "#00E7F9",
                  }),
                  (0, i.jsx)("mask", {
                    id: "mask1_15_2378",
                    style: { maskType: "luminance" },
                    maskUnits: "userSpaceOnUse",
                    x: "16",
                    y: "34",
                    width: "9",
                    height: "6",
                    children: (0, i.jsx)("path", {
                      d: "M16.5278 34.136H24.5278V39.511H16.5278V34.136Z",
                      fill: "white",
                    }),
                  }),
                  (0, i.jsx)("g", {
                    mask: "url(#mask1_15_2378)",
                    children: (0, i.jsx)("path", {
                      d: "M20.4601 39.6932L17.5278 35.3651L18.3976 34.5995L20.0174 37.0422L20.8976 37.0162L22.5226 34.6516L23.4861 35.3391L20.4601 39.6932Z",
                      fill: "#00E7F9",
                    }),
                  }),
                ],
              }),
              (0, i.jsx)("defs", {
                children: (0, i.jsx)("clipPath", {
                  id: "clip0_15_2378",
                  children: (0, i.jsx)("rect", {
                    width: "40",
                    height: "40",
                    fill: "white",
                    transform: "translate(0.527771 0.802612)",
                  }),
                }),
              }),
            ],
          }),
        n5 = () =>
          (0, i.jsxs)(n$, {
            id: "Home",
            children: [
              (0, i.jsxs)(n0, {
                children: [
                  (0, i.jsxs)(n2, {
                    children: [
                      (0, i.jsxs)(n1, {
                        children: [
                          "Hi, I'm Diego C\xe2mara",
                          (0, i.jsx)("br", {}),
                          "A Front End Developer",
                          (0, i.jsx)("br", {}),
                          "Based in Montreal",
                        ],
                      }),
                      (0, i.jsxs)(n4, {
                        children: [
                          "I help businesses and companies reach",
                          (0, i.jsx)("br", {}),
                          "their goals by designing and developing",
                          (0, i.jsx)("br", {}),
                          "user-centric web applications",
                        ],
                      }),
                      (0, i.jsx)(y, {
                        variant: "filled",
                        children: (0, i.jsx)(Z(), {
                          href: "#Contact",
                          title: "Get in touch",
                          children: "Get in touch",
                        }),
                      }),
                    ],
                  }),
                  (0, i.jsx)(n2, {
                    children: (0, i.jsx)(D(), {
                      src: n8,
                      alt: "Diego C\xe2mara",
                      width: 420,
                      height: 420,
                    }),
                  }),
                ],
              }),
              (0, i.jsx)(Z(), {
                href: "#About",
                title: "Scroll down",
                "aria-label": "Scroll down",
                children: (0, i.jsx)(n3, { children: (0, i.jsx)(n6, {}) }),
              }),
            ],
          });
      function n9() {
        let n = (0, r.Z)(["\n  gap: 0;\n"]);
        return (
          (n9 = function () {
            return n;
          }),
          n
        );
      }
      function n7() {
        let n = (0, r.Z)(["\n  width: 100%;\n"]);
        return (
          (n7 = function () {
            return n;
          }),
          n
        );
      }
      function en() {
        let n = (0, r.Z)(["\n  width: 100%;\n"]);
        return (
          (en = function () {
            return n;
          }),
          n
        );
      }
      let ee = a.ZP.section(n9()),
        et = a.ZP.h3(n7()),
        ei = a.ZP.div(en());
      function er() {
        let n = (0, r.Z)([
          "\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  isolation: isolate;\n  background: var(--gray-50-linear-10);\n  backdrop-filter: var(--background-blur);\n  border-radius: var(--spacing-s-100);\n  box-shadow: var(--shadow-10);\n  transition: var(--transition-03);\n  position: relative;\n  min-height: 580px;\n\n  &:hover {\n    background: var(--gray-50-linear-15);\n    box-shadow: var(--shadow-20);\n    transform: translateY(-5px);\n  }\n\n  @media only screen and (max-width: 768px) {\n    min-height: unset;\n  }\n\n  img {\n    width: 100%;\n    height: 100%;\n    height: 250px;\n    object-fit: cover;\n    border-top-left-radius: var(--spacing-s-100);\n    border-top-right-radius: var(--spacing-s-100);\n    transition: transform var(--transition-03);\n  }\n",
        ]);
        return (
          (er = function () {
            return n;
          }),
          n
        );
      }
      function ea() {
        let n = (0, r.Z)([
          "\n  padding: var(--spacing-s-100) var(--spacing-s-300);\n  border-radius: var(--spacing-s-100);\n  background: var(--primary-color);\n  position: absolute;\n  top: var(--spacing-s-300);\n  left: var(--spacing-s-300);\n  box-shadow: var(--shadow-10);\n  transition: var(--transition-03);\n  color: var(--gray-900);\n  font-size: var(--font-s-100);\n  font-weight: var(--font-weight-bold);\n\n  &:hover {\n    background: var(--primary-variant-color);\n    box-shadow: var(--shadow-20);\n  }\n",
        ]);
        return (
          (ea = function () {
            return n;
          }),
          n
        );
      }
      function es() {
        let n = (0, r.Z)([
          "\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: flex-start;\n  padding: var(--spacing-m-400);\n  gap: var(--spacing-m-400);\n  height: max-content;\n\n  img {\n    width: var(--spacing-s-300);\n    height: var(--spacing-s-300);\n  }\n",
        ]);
        return (
          (es = function () {
            return n;
          }),
          n
        );
      }
      function eo() {
        let n = (0, r.Z)([
          "\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  padding: 0px;\n  gap: var(--spacing-s-300);\n",
        ]);
        return (
          (eo = function () {
            return n;
          }),
          n
        );
      }
      function el() {
        let n = (0, r.Z)(["\n  color: var(--gray-50);\n"]);
        return (
          (el = function () {
            return n;
          }),
          n
        );
      }
      function ec() {
        let n = (0, r.Z)(["\n  color: var(--gray-200);\n"]);
        return (
          (ec = function () {
            return n;
          }),
          n
        );
      }
      let ed = K.memo(a.ZP.div(er())),
        eA = K.memo(a.ZP.div(ea())),
        eg = K.memo(a.ZP.div(es())),
        eh = K.memo(a.ZP.header(eo())),
        eu = K.memo(a.ZP.h4(el())),
        ep = K.memo(a.ZP.span(ec()));
      var em = {
        src: "/frontend//_next/static/media/arrow-right.b89c69dc.svg",
        height: 18,
        width: 19,
        blurWidth: 0,
        blurHeight: 0,
      };
      let ef = (0, K.memo)((n) => {
        let { project: e } = n;
        return (0, i.jsxs)(ed, {
          children: [
            (0, i.jsx)(D(), {
              src: e.thumbnail,
              alt: e.name,
              width: 600,
              height: 350,
            }),
            (0, i.jsx)(eA, { children: e.work }),
            (0, i.jsxs)(eg, {
              children: [
                (0, i.jsxs)(eh, {
                  children: [
                    (0, i.jsx)(eu, { children: e.name }),
                    (0, i.jsx)(ep, { children: e.description }),
                  ],
                }),
                (0, i.jsx)(y, {
                  variant: "inline",
                  children: (0, i.jsxs)(Z(), {
                    href: e.link,
                    "aria-label": "Visit site",
                    title: "Visit site",
                    target: "_blank",
                    children: [
                      "Visit site",
                      (0, i.jsx)(D(), {
                        src: em,
                        alt: "arrow-right",
                        width: 16,
                        height: 16,
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      });
      (ef.displayName = "Card"), t(3997), t(7693), t(1071);
      var eb = t(6523),
        ex = t(2546);
      let ew = K.memo((n) => {
        let { data: e } = n;
        return (0, i.jsx)(ex.tq, {
          spaceBetween: 16,
          navigation: !0,
          loop: !0,
          pagination: { clickable: !0 },
          breakpoints: {
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          },
          modules: [eb.W_, eb.tl],
          children: e.map((n, e) => (0, i.jsx)(ex.o5, { children: n }, e)),
        });
      });
      ew.displayName = "Carousel";
      var ev = {
          src: "/frontend//_next/static/media/Armazem Paraiba.661f13d6.png",
          height: 1610,
          width: 2938,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAb0lEQVR42gFkAJv/ANFtbNSBfdqYlteamNuln9iRj9FoZdBlXQDlaUDkakLjIwDfk3veeVrmb2XpcW7hTwAA9uLJ9NLJ9dDN6s6+5bev9MzH9tnV9tTSAPj7/sCwssGnpsOXl8Obm8+trsmvrvLq6QUoQbM8sSKeAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 4,
        },
        eC = {
          src: "/frontend//_next/static/media/Genetec Developer.a039f5ce.png",
          height: 944,
          width: 1904,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAaklEQVR42mMwNLHU1zcyMLFS1zEWkdW0NLfQ0jYEshn0XCOcIrPd3L31jUzDwmOLKxoK41N11HQYpNWN5bTNhaVUxaSVLYxNVHQsrKzsFVR1GQxNrZxdPEzNbVQ0DVS0jZTUtGWUtMRkVAEYeBP2d+4FEwAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 4,
        },
        ej = {
          src: "/frontend//_next/static/media/Med Club.b98b0b9a.png",
          height: 936,
          width: 1898,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAbUlEQVR42mNwNc3zt5zkadZpohOiIK+rr2ttbm4jL6vP4GM53cUyP9iqxVInV1nJwME61t46UkHOkCHW6kSgy+x43/UBVouV5Q2dTWvt9WqU5I0Z0i3vZ9u8TLW+F266TVXBQVfb2kDPUVHeEABSYRwkgVnmsQAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 4,
        },
        ey = {
          src: "/frontend//_next/static/media/Rider.95be1979.png",
          height: 1600,
          width: 2930,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAb0lEQVR42gFkAJv/AMTExL/AvsjKx8fJxrS0sru7ury/vrKxsADk4+S6trrMzcvi5eKDc3ZlMCmZjolkWlMA7fDsy9nJ2t7Z6+vsq56cn3dwrpeQxb22AO/y7+bw5PX59fX19Orr5/Dw7vDw7uPh36IDSOMcwIp7AAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 4,
        },
        eE = {
          src: "/frontend//_next/static/media/Sinsa.16873da4.png",
          height: 1610,
          width: 2930,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAb0lEQVR42gFkAJv/AJq5l6e7oKq9oNvGt9O3qtzBs9GyncWmjgDx6ebq5eTv7/DCvLaysLOMoaV2ystxxsIA+vPo/fft7+/o1MzF5OHhzNDR0+vq1+voAPz8/fDq6fr6+/b3+P39/fbz8/Xx8f///pgoT8ENEUo9AAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 4,
        },
        eU = {
          src: "/frontend//_next/static/media/Tambasa.2e8389dd.png",
          height: 930,
          width: 1899,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAb0lEQVR42gFkAJv/AOHj6Nnb4eDh4snK072/zeLj5Nrc397d3gDo5+jU1Nze3uC3t8Cmqb3c3eDd3eDr6ukA8/Hw6enr4ODhu7vDt7m619ja5eXq9fX1AP///7e3uZeboK2yuqiqsJmdpL/Ey////8g5T1QUWUMdAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 4,
        },
        ek = {
          src: "/frontend//_next/static/media/TechDoc.5e5f0c07.png",
          height: 862,
          width: 1905,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAbElEQVR42mMw8s+UcUtR9EgzC84zDcqTc0/V8ErX9klnkFcxlFPSs7ezd7KxcrKzsrWxkVXUVVQ1ZFAyCZDS9QgIjo4OT3D2jzOzcZUz8FE09meQNo5QMo9084l284ux84xWN/aUMg6XNYkEALIBF8VUFvvpAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 4,
        };
      let eD = () => [
          {
            thumbnail: eC,
            name: "Genetec Developer",
            description:
              "I collaborated on the Genetec™ Developer project, where we aimed to create a central hub for API and SDK documentation. My role involved optimizing site performance and scalability, utilizing Figma, JavaScript, HTML, and CSS. Through our efforts, we successfully enhanced the user experience, resulting in a successful launch and improved online presence.",
            link: "https://genetecmarkdown.fluidtopics.net/",
            work: "Web Development + UI/UX",
          },
          {
            thumbnail: ej,
            name: "MedClub",
            description:
              "I developed and maintained a Learning Management System (LMS) that utilized innovative technologies and teaching methodologies. Leveraging Next.js, TypeScript, and React Hooks. By converting Figma designs to front-end code with Styled Components and Chakra UI. Collaborating with backend developers, we integrated GraphQL, Node.js, and AWS.",
            link: "https://www.prime.med.club/auth/signin",
            work: "Web Development",
          },
          {
            thumbnail: eU,
            name: "Tambasa",
            description:
              "I collaborated on Tambasa's e-commerce store, leveraging React, TypeScript, HTML, CSS, TailwindCSS, and REST APIs. Together with a dedicated team, we enhanced the platform's scalability, responsiveness, and checkout experience, resulting in increased online sales and customer engagement.",
            link: "https://loja.tambasa.com.br/home",
            work: "Web Development",
          },
          {
            thumbnail: ev,
            name: "Armaz\xe9m Para\xedba",
            description:
              "I collaborated with the team to build an e-commerce platform for Arm\xe9zem Paraiba using ReactJS, JavaScript, HTML, CSS, and REST APIs. The project resulted in a responsive design, smooth checkout process, and high-performance standards. With improved user experience and increased customer engagement, the platform drove positive business outcomes.",
            link: "https://www.armazemparaiba.com.br/",
            work: "Web Development",
          },
          {
            thumbnail: eE,
            name: "Sinsa",
            description:
              "I collaborated on Sinsa's responsive e-commerce platform, utilizing KnockoutJS, JavaScript, HTML, CSS, Less, Bootstrap, and REST APIs. By optimizing performance and scalability, we improved the customer experience and achieved a successful project outcome with an enhanced online presence.",
            link: "https://www.sinsa.com.ni/",
            work: "Web Development",
          },
          {
            thumbnail: ey,
            name: "Rider",
            description:
              "I successfully collaborated with clients and team members to implement a responsive design and streamline the checkout process for a web application. Using ReactJS, Styled Components, and Less, I optimized performance and scalability, resulting in improved user experience and increased conversion rates.",
            link: "https://www.rider.com.br/",
            work: "Web Development",
          },
          {
            thumbnail: ek,
            name: "TechDoc Hub",
            description:
              "I collaborated closely with the client on the TechDoc Hub project, a portal designed to provide easy access to technical content. My role involved optimizing performance, scalability, and user experience through responsive design. Using Figma, JavaScript, HTML, and CSS, I developed the UI and implemented key features that enhanced usability.",
            link: "https://techdocs.genetec.com/",
            work: "Web Development + UI/UX",
          },
        ],
        eS = () =>
          (0, i.jsxs)(ee, {
            id: "Projects",
            children: [
              (0, i.jsx)(et, { children: "Projects" }),
              (0, i.jsx)(ei, {
                children: (0, i.jsx)(ew, {
                  data: eD().map((n) => (0, i.jsx)(ef, { project: n }, n.name)),
                }),
              }),
            ],
          });
      function eZ() {
        let n = (0, r.Z)([""]);
        return (
          (eZ = function () {
            return n;
          }),
          n
        );
      }
      function eR() {
        let n = (0, r.Z)([""]);
        return (
          (eR = function () {
            return n;
          }),
          n
        );
      }
      function eL() {
        let n = (0, r.Z)([
          "\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  gap: var(--spacing-s-300);\n  \n  & > * {\n    width: 12.5%;\n    padding: var(--spacing-s-200) var(--spacing-s-300);\n  }\n\n  @media only screen and (max-width: 1440px) {\n    & > * {\n      flex-basis: 15.5%;\n    }\n  }\n\n  @media only screen and (max-width: 1280px) {\n    & > * {\n      flex-basis: 18.5%;\n    }\n  }\n\n  @media only screen and (max-width: 1024px) {\n    & > * {\n      flex-basis: 23.5%;\n    }\n  }\n\n  @media only screen and (max-width: 1024px) {\n    & > * {\n      flex-basis: 31.5%;\n    }\n  }\n\n  @media only screen and (max-width: 649px) {\n    & > * {\n      flex-basis: 47%;\n    }\n  }\n\n  @media only screen and (max-width: 410px) {\n    & > * {\n      flex-basis: 100%;\n    }\n  }\n",
        ]);
        return (
          (eL = function () {
            return n;
          }),
          n
        );
      }
      let eQ = a.ZP.section(eZ()),
        eB = a.ZP.h3(eR()),
        eH = a.ZP.div(eL()),
        eV = [
          {
            name: "HTML5",
            icon: {
              src: "/frontend//_next/static/media/html5.40b2e13e.png",
              height: 21,
              width: 21,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABCUlEQVR42hXBsUrDQBwH4N9dEqsBSytxMYigCBJFEKSIFAQdHH2Ajk4ujm5KNx/BRfEFnATBPEARwUHQOBjq0ppSI7k0icSS6/1Lv491j5xVkv+n8L8KfIIxAKwCQn1pirTZK9Y5tHeYOfcEpw5esWCWS+CqwPD5AX++t6cr9zvUjjeF0TipQghpmNOMy1wbvrUS2cp/dL6GFEmQ00BUkQiNCgPqtwuKvLzYrg04bzQjit8z5Xug9gdR1Cettg8qepl4WY91+7wpOxuI+bIDlkSKl01QmnIKIHZxm3NMLNqhvL6E6vf0URjo+c0FlLUgAEDHxMz8GbXdV3nvHmQl8NEKHsnaugMCjAEd4nq0YsRZwAAAAABJRU5ErkJggg==",
              blurWidth: 8,
              blurHeight: 8,
            },
          },
          {
            name: "JavaScript",
            icon: {
              src: "/frontend//_next/static/media/javascript.2c796b79.png",
              height: 22,
              width: 25,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAAwUlEQVR42lWM3QoBcRDFZ2Zn7Yq48VVKblxIyo0H8AK8l1vvpSTfpFwoSetjW8uu/xjtlTOdms7p/NDbDEYo0gbEUEQQEona1WzK+vTULfiXdggiUGAQ8EF3uo5JU6KEEMXCROj/CGQU6NhEk3lAwVNgf3iZei0F3U6GWNdGDxwHzcM34t0+4Loo98eHorcYUnaWGWE8DXi2Dq1yka1Swebl9g3nS5RFb90fWoSt4ykKvWuMzUYaVrun5HPsVCv24gumlVHY1gO3LwAAAABJRU5ErkJggg==",
              blurWidth: 8,
              blurHeight: 7,
            },
          },
          {
            name: "Typescript",
            icon: {
              src: "/frontend//_next/static/media/typescript.219c6dcc.png",
              height: 21,
              width: 21,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA6ElEQVR42g3FPUoDURSA0e/e9ybJYEIUDYL4g42KaJ3GFQhWuhUbW3fgDmys7GxdgGBANIUgCIoiSDJhYF7iOCZzHU5xhLPeKcY+Ql6tAAglRqP60YMdq0h3XkAFgoGvrmKMbfkaEorSGE3KP0CpCxhlJWrFGnwxM92NlcOdpnOg/WGBCLIUOy7fftQDGHCwt8DqYoPa/YCTboebhwReJ+hyJDyPplzdDezpPbPz26G9fAZbb0dstj1agKvQmfOuEam0VuqS/pZue63J0UbsfDASahp6X3lIx1PN8hlpWpTXH9/Ni36W/AN5/1ja4OaEIgAAAABJRU5ErkJggg==",
              blurWidth: 8,
              blurHeight: 8,
            },
          },
          {
            name: "ReactJS",
            icon: {
              src: "/frontend//_next/static/media/reactjs.e968a529.png",
              height: 21,
              width: 21,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAuklEQVR42mMAgdTnP5gSb/02Sbz1lz3p/k/WxFu/jJJv/mBigIGkm78NgAr8gBKRQBwBxB6JN3/pwxUAOYFAHArETVAcCsTBYEmgagcgjgKasBBINwJxHZA9I/Hm7wigIieGhFu/EsD2AyWB7G6gYC9UoUXCzV/JDKEXvjEBFWQCJVqBCmqBuAGouwPIz0J2gznIoQm3flcAcR1QtyFQzAquACgoDNQVl3DjtzLQBBWggmQgLczAwMAAAFhBhd9bxvvdAAAAAElFTkSuQmCC",
              blurWidth: 8,
              blurHeight: 8,
            },
          },
          {
            name: "NextJS",
            icon: {
              src: "/frontend//_next/static/media/nextjs.5f7f8341.png",
              height: 21,
              width: 21,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAeUlEQVR42i2MLQoCYRgG3yOYBKPH0jNYzYIHMFiED8HinkCDsM1ksGj05wSLQVhY5mHhWT52Z9KUiYzmKjhqFj0keTDlXMhUNNT8MMvQFXPQmieFzC24yzqxYqdS5hFsZS58tNcbk4IxLxmrotRXk7ydcuZPy6YdRXRZuV+/o5qQ6wAAAABJRU5ErkJggg==",
              blurWidth: 8,
              blurHeight: 8,
            },
          },
          {
            name: "Knockout",
            icon: {
              src: "/frontend//_next/static/media/knockout.9c8cebb9.png",
              height: 21,
              width: 21,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAf0lEQVR42oXMMQrCUBCE4X9MULRVFAvBCxixtfQUHtcjiFdIBGsLG3mZ7OP1ybcDy8CyTNG72cyMAMWKMZkNpU1R12zvhp/wC6iQjpjWxohUG5LgBroiamCB+CNV2A8Rust+1cMSk7CFcqzE/Et7WosR5cN5F/cCnFNEPzw/HgDd2ioXH5LJWwAAAABJRU5ErkJggg==",
              blurWidth: 8,
              blurHeight: 8,
            },
          },
          {
            name: "NodeJS",
            icon: {
              src: "/frontend//_next/static/media/nodejs.be213ee0.png",
              height: 21,
              width: 21,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAuElEQVR42kWOwQoBURSGb5Q8gScg916UshPJRqRkIxQLZWWh1KxYTOYMewsbew+j7p1n8mVmcuqrc///v+ccFTtTUFmJNzNY/N+ZF3lj4SJez8WZMUYg3jZ/JkIb4R45U4s/rTJBDQM0gYZixTR2toc4JPxGfMIBNtBXBEZpQE8IvBD38IBAEtPhEALe7JiwJnAWjoQlhNBV10SXMFfpL63pK/QncXorvlpUeYXOFDGPTLmJq9tc/wI5d1/mmY0v3QAAAABJRU5ErkJggg==",
              blurWidth: 8,
              blurHeight: 8,
            },
          },
          {
            name: "C# (CSharp)",
            icon: {
              src: "/frontend//_next/static/media/csharp.4b5e1907.png",
              height: 21,
              width: 21,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA/klEQVR42mPo5mtlYoCCdobGMCCOgPEDGNIZwYxpLhNVJ2n2rN7YtPb/xuZ1/yfp9Gxcm7ZIAyw5P3a2+jS7iZ8v7bn4/9XDV39fPXj57+q+y//rGRr+5hrVGDIUMWTb7Jy47f/Ley9+z3aa8n+6/5T/a6Zs/rV28rb/9e59rgwxDIGWx5cd+XPv3N1/SQxZ/90Ykv53xE/9c3rHxf8d4VOdGCZb9ln2+U38f//aw/8n9577c3L3uT8XD1/9H8NQ+D9ZqdSe4cXR+8z+DJlFla4dHw5uPvb/wKaj/xvD+z/GMxQXbJy2g4UBBnQYAmT0GULXGDKEr2dgMJKBiQMAHP13z5x3JFUAAAAASUVORK5CYII=",
              blurWidth: 8,
              blurHeight: 8,
            },
          },
          {
            name: "Figma",
            icon: {
              src: "/frontend//_next/static/media/figma.e9788c99.png",
              height: 21,
              width: 21,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA4UlEQVR42mMAgU9+aqof/fQffPDR+f47J+bD39KMX3+LU7MYYOCjn0z4V1+G/199GP79z/T5/z/H9////IgtcAX//RlYr4UsPn7db97/5+X9x85M2fDlRs8KW7iCeTH/vWfF/P8/P/D/b+31/28xHPr/n2Hv/4VwBatt/5stDvj/aZHfr7+xK3+fktr357/+rj9tDHDwlkHQ9ODMc9Z75v0337fIhGH3f1nvXQyMcHnhs60RDBfq/jNcqgHiCj0GELiSxwRXwHu+mU/wXOsy0bNtE2x37WNm2P6fUfbIKbAJAPOtaNXf2KOKAAAAAElFTkSuQmCC",
              blurWidth: 8,
              blurHeight: 8,
            },
          },
          {
            name: "CSS3",
            icon: {
              src: "/frontend//_next/static/media/css3.bbc82cf2.png",
              height: 21,
              width: 21,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR4nAEIAff+ARtztjrx/f+q9O77+QACAgEAGg8AAAcD/xUA/AkH7vNZAQBmsjUwFAbKc0AbAAsIBQAPGRYA/AIEAIy/3gC7rtY6AQBpsiEkDQXMXioQEhMOB/4RHxoAPScUAnes1PKmYMQ1AS95uBPf9/3Q8uz6HKtkKP8pJhwAAwcFAVCm0ubZbbQwAdTK0gIsouLUpE0eKbDX8f4nKR0AYjUXAiOZztqBeTstAQAAmgAAZRjMq1YhMx4cD/sPFRQA4+76BUWk0c8AMTYyASZ0tgD6/wCW4PL8aUogDAANIRgAqej0ACLt8Z0PFQ9kAQBytgAA/P8FQw0DLL3u+0oA/wACQPn1tcCf4NMABwT7NQ9lR25zOZQAAAAASUVORK5CYII=",
              blurWidth: 8,
              blurHeight: 8,
            },
          },
          {
            name: "Less.js",
            icon: {
              src: "/frontend//_next/static/media/lessjs.d70e6e76.png",
              height: 21,
              width: 21,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAApklEQVR42oVPuwrCQBC8A5EgSMCf0LtL0DSCpSgikr38gpaihYUWgrjTaGVn77c6xEdh48AwszfLHGs+CAIbopJUUfsNigmsE22bH/QXaAxnXPRRp15w8iVaeaVJFpHmFZpedMz3uaFZO8Gew43+Qr2SR/oduWUDljRn8sFgRT2413wnN2zQgkFmCH7XYVvajUi4NHKlDsxfeEF9mqOyrdbe2weBfQJbRjdnG2wyagAAAABJRU5ErkJggg==",
              blurWidth: 8,
              blurHeight: 8,
            },
          },
          {
            name: "Sass",
            icon: {
              src: "/frontend//_next/static/media/sass.3a711b3e.png",
              height: 21,
              width: 21,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAsklEQVR42o2PsQ4BQRCGh4RrKK4QpaiVWiWFTlRKip1bOYXkSoXGC4hwO4cn8CR2LuKR/Je76/3Jt5PM/Pl3hpSlSZWUs6Fa1yLIR9KgWp7dBMYDsGAPugRpYfLGLWFIciud0izmEz/aVWIDj5xzvoU+cgMMLcwz9KYgpDLG9TBYg0TZXTE4gVfO2QpfjIqEsTdyRE3BBQk71IXGz8Bz2ic1Mkdj893eA/pHbyxWnF5f8QOZTVvyM5l+bwAAAABJRU5ErkJggg==",
              blurWidth: 8,
              blurHeight: 8,
            },
          },
          {
            name: "Bootstrap",
            icon: {
              src: "/frontend//_next/static/media/bootstrap.fc12c980.png",
              height: 21,
              width: 21,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA5ElEQVR42oXKvUrDUBiH8f97TkKpNIMtGEoEwcULcBf8WJycXMXFwatwcXZyFAQnEfEmzC6uxQ8EpcaPFJoWcnLyvm/TK+hvfR5C4yKULq1pny1qXRK4qdhygO9ztPIAc129cy+yU0OLCgqGdhDjcS8rtun2yLfebuh1eV+SjUNGOQae74H/VLPeLtaDr9ScVJCkvcpihCm0inYCdTDx3wCnRg2GDPW1F/LMUnmRqA8qod5E+DQHV6MHgv42N+XvZPMh7MeTUAgd9TbLpjXOVty1++GtCXxRAQhgOiZGeplFx1hkBihKabYLojeKAAAAAElFTkSuQmCC",
              blurWidth: 8,
              blurHeight: 8,
            },
          },
          {
            name: "Tailwind CSS",
            icon: {
              src: "/frontend//_next/static/media/tailwindcss.a3d6783c.png",
              height: 21,
              width: 21,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAnUlEQVR42mMAAfM93xkZ0ID53h/MFvu+M8IlgQKiFnt/FABxkvm+n+xwlZb7fjJBFHx3t9jzY43Fnu//gYpuAbGV5d4fZgwgAORoWuz7oQK1zh+o+BpQbDdQsSVQ8rsrkHMUiEE6l4EUWe39yQOiobq/iUB1tgMVgxTdANIRELnvzCAaDiz2fJe22PNDHdU7e74xAiUYLXb/YGLAAgDpkFOJv0tKeQAAAABJRU5ErkJggg==",
              blurWidth: 8,
              blurHeight: 8,
            },
          },
          {
            name: "Material UI",
            icon: {
              src: "/frontend//_next/static/media/materialui.7a2d7be1.png",
              height: 21,
              width: 21,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAz0lEQVR42mNQWHaKmwEKpJecZATRsg3b2RUadzDKNGzjZJBfenKH3LJTtTBFMvXb8mTqt64DYiMgexNIwTX5ZafuAunTMk3bT8vUbb0kXb/1IhAryNRvNwQpeCi/4rSG3IJjXrLtO4OACryAkvdl6rdIAk1pAykIklt8Qh5sfMeuRumqLVeAElYyddvCgfR3BhhQ2HyJTW7h8S9AvECmdmsj0P7HQJzAIL/sJLPc8lNMYEW7rogBFSwBumWJTMkGfgZkILfmLCMDGpCp28oCAHw6WCjE0qDVAAAAAElFTkSuQmCC",
              blurWidth: 8,
              blurHeight: 8,
            },
          },
          {
            name: "GraphQL",
            icon: {
              src: "/frontend//_next/static/media/graphql.815115bb.png",
              height: 21,
              width: 21,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAuElEQVR42mNABk9MVu0D4iIUwccmq5SB2AeIIx+brFwJVNAPZHuB8CPD1RwMQMFqsE7T1d6PzFYKACVMgPx4IH3jsfFKBYbHhislgIzQJ6arHCHWrOZ5bLwq9InxSmuwFUCOAVD1vCemK7kfGa/mhlrrDDSl7zTDbkYgZ2URUOAukE5+ZLLS/JHxSnsguwModh9oshzDU9NVrEBThIAm2AN1rQHiukcmq+SBVvEzoAOgZAMQOyOLAQDC5WP6YG+IZgAAAABJRU5ErkJggg==",
              blurWidth: 8,
              blurHeight: 8,
            },
          },
          {
            name: "Jest",
            icon: {
              src: "/frontend//_next/static/media/jest.84142928.png",
              height: 21,
              width: 21,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAtElEQVR42k2PQQsBQRiGv8LRQckfUFKuDi7KDKVEOVhpZuMiRXHYy7ZcXLhtijQ7Wn6r56K89cz7zft+cxjx2hYFeWWXmbYZBDCH1GsTy08sNmHm+7YBLcohdMQPwipFWxBByss39zs888mqIAQxlz3lFQ7MD/jAEcbCwovhhge4g4XTdoSfYS0cJ8oItk6ZmqBcmzJ5kikzFYYLVPhFHZ9C5JXZ4EoEsdUlSAh20HM6LMmfvrtHVlVxVIP4AAAAAElFTkSuQmCC",
              blurWidth: 8,
              blurHeight: 8,
            },
          },
          {
            name: "GitHub",
            icon: {
              src: "/frontend//_next/static/media/github.0a6a58c7.png",
              height: 21,
              width: 21,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAfUlEQVR42g3BsaqBcQCH4Z9zjuHU6cxiNSi5CRmUC3ANykRmZXUFZqvF5EKMBsnMqP/7Uh/Pk6T6Zu7erUNTauHXHVJReWNCwppr+aNbGgx82Y4nN4aQZ907s3D0YKgT/5VpWHh2aex5sdgKNVZsCWMqR+bj8UOf0LRjytcb8yZTw/rtisMAAAAASUVORK5CYII=",
              blurWidth: 8,
              blurHeight: 8,
            },
          },
          {
            name: "GitLab",
            icon: {
              src: "/frontend//_next/static/media/gitlab.7d67949a.png",
              height: 21,
              width: 21,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA2UlEQVR42mN47KrB/tBZs+iRmzr7QydNVgYgAPL1gTiGAcqxfOSs+fORq6YUAxQA+ZWPnDVuQhQ4aM584KD5Hyi45JGLZjFQYQnQpGsP7DX/P3TUtGH4nqb26k2o+n+wgIvm/weOYMX/P8ap//+ZqTaV4W+e6hEg/v8pTv37IyvN38/cNH7+SFf78zdf9f+fPNU8hp9Z6hK/c9T2gQS+16r9/VWp9v9vrup/oFgDAzL43aHW9mcpUNd81Re/CtU8EBKFasxw9gI1v1/LVNUZgOBPrRrL73xVRgCdcmmVV9Rt2AAAAABJRU5ErkJggg==",
              blurWidth: 8,
              blurHeight: 8,
            },
          },
          {
            name: "Git",
            icon: {
              src: "/frontend//_next/static/media/git.d5047324.png",
              height: 21,
              width: 21,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAtUlEQVR42mP47K/BzAAFn/00zn7y02gFsb/4aTF/9FdjZACB7/7qQp/9NOs++2tO/uSv+R+oqBSiSIeJ4a+/MgfQlANABf+BClw/+WukA/n/gXQhAwgAOac/+YF0gQQ1dwAVpQDpOCD+D5QrACno+QyShJgwF6hzF1ByHZD9AojtYabUABWBFEQB8WoIW0OPAeIQTSaoolqgJEjRM5gk0F2sDEAjGb/5ajFCFdUBsSNckoGBAQCnmGJucED50AAAAABJRU5ErkJggg==",
              blurWidth: 8,
              blurHeight: 8,
            },
          },
          {
            name: "Azure DevOps",
            icon: {
              src: "/frontend//_next/static/media/azure.ce300d99.png",
              height: 21,
              width: 21,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA0UlEQVR42mNwnfKciQEK4he8M8pa/omDAR0EznojGzjrdXzonDdvgPhy8OzXxkCsHzzrjSCDx7TnHt7TX570m/lqmd+MV/lAhaa+M14mAcX+A7EFg93Ep5ttJz4tYUACVhOeuALF/ttOemrKoNv9cJFe98MCBiRg2PvQBij2HyhnxqDYepdLtuVugGTznVWSTbfniDfdLpFqvjNFpuXOf7nWu8YMDEDAXXuXSbD+5mwgnsdfd+MBX92N//z1N7PBknLNd5gYkIH2BiaGsssqMC4Ad3pc99/VngAAAAAASUVORK5CYII=",
              blurWidth: 8,
              blurHeight: 8,
            },
          },
        ],
        eP = () =>
          (0, i.jsxs)(eQ, {
            id: "Skills",
            children: [
              (0, i.jsx)(eB, { children: "Skills" }),
              (0, i.jsx)(eH, {
                children: eV.map((n, e) =>
                  (0, i.jsxs)(
                    y,
                    {
                      variant: "skill",
                      children: [
                        (0, i.jsx)(D(), {
                          src: n.icon,
                          width: 24,
                          height: 24,
                          alt: n.name,
                        }),
                        n.name,
                      ],
                    },
                    e
                  )
                ),
              }),
            ],
          }),
        eM = () =>
          (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsxs)(nR(), {
                children: [
                  (0, i.jsx)("title", {
                    children: "Diego C\xe2mara - Front End Developer",
                  }),
                  (0, i.jsx)("meta", {
                    name: "description",
                    content:
                      "As a Front End Developer, I have a passion for creating user-friendly interfaces using technologies such as ReactJS, NextJS, JavaScript, TypeScript, HTML, CSS, and my design skills extend beyond coding, as I’m proficient in Figma to bring my visions to life. I integrate frontend systems with content management systems and have experience with both GraphQL and REST APIs. With expertise in Scrum, Kanban, Agile, and code versioning tools.",
                  }),
                ],
              }),
              (0, i.jsx)(nO, {}),
              (0, i.jsxs)("main", {
                children: [
                  (0, i.jsx)(n5, {}),
                  (0, i.jsx)(R, {}),
                  (0, i.jsx)(eP, {}),
                  (0, i.jsx)(nD, {}),
                  (0, i.jsx)(eS, {}),
                  (0, i.jsx)(X, {}),
                  (0, i.jsx)(nS, {}),
                ],
              }),
            ],
          });
      var eI = eM;
    },
  },
  function (n) {
    n.O(0, [128, 774, 888, 179], function () {
      return n((n.s = 8312));
    }),
      (_N_E = n.O());
  },
]);
