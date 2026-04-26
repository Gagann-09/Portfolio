import { BrainCircuit, LayoutTemplate, Server, Activity, Award } from "lucide-react";

export const projects = [
  {
    title: "GraphCL-Lite",
    category: "Machine Learning / GNN",
    description: "A lightweight contrastive learning framework for Graph Neural Networks. Implemented for node classification on the Cora dataset with robust PyTorch architectures.",
    tech: ["PyTorch", "PyTorch Geometric", "Python"],
    github: "https://github.com/Gagann-09/GraphCL-Lite",
    link: "#",
  },
  {
    title: "Quantum SVM Anomaly Detection",
    category: "Quantum Machine Learning",
    description: "An asynchronous Quantum Support Vector Machine designed to detect financial anomalies using the creditcard.csv dataset, exploring the frontiers of quantum-assisted ML.",
    tech: ["Qiskit", "Python", "SVM", "Data Science"],
    github: "https://github.com/Gagann-09/Asynchronous_Quantum-SVM_for_Financial_Anomaly_Detection",
    link: "#",
  },
  {
    title: "Brain Tumor Detection",
    category: "Computer Vision",
    description: "Medical imaging classification model utilizing advanced CNN architectures to accurately detect brain tumors from MRI scans, providing critical diagnostic support.",
    tech: ["TensorFlow", "OpenCV", "Python", "CNN"],
    github: "https://github.com/Gagann-09/Brain_Tumor_Detection_using_Medical_Imaging",
    link: "#",
  },
  {
    title: "ShadowFox",
    category: "Software Engineering",
    description: "A modern, robust web application built with TypeScript. Focuses on scalable architecture, clean code practices, and seamless user experiences.",
    tech: ["TypeScript", "React", "Node.js"],
    github: "https://github.com/Gagann-09/ShadowFox",
    link: "#",
  },
];

export const educationData = [
  {
    institution: "JSS Academy Of Technical Education Karnataka",
    degree: "Bachelor of Engineering - BE, Artificial Intelligence",
    period: "Sep 2023 – Aug 2027",
    details: [
      { icon: <Activity size={16} />, text: "Cricket, Volleyball, Football, Music Composition" },
      { icon: <Award size={16} />, text: "Skills: C, Operating Systems" }
    ]
  },
  {
    institution: "M.E.S College of Arts, Science and Commerce",
    degree: "Pre-University Course (PUC), Science",
    period: "Jun 2021 – Mar 2023",
    details: [
      { icon: <Award size={16} />, text: "Grade: 92.66%" },
      { icon: <Activity size={16} />, text: "Cultural Music, Badminton, Volleyball, Cricket" }
    ]
  },
  {
    institution: "National Academy for Learning",
    degree: "SSLC, Science",
    period: "Jun 2019 – Mar 2021",
    details: [
      { icon: <Award size={16} />, text: "Grade: 90.33%" },
      { icon: <Activity size={16} />, text: "Cricket, Volleyball, Table Tennis, Football, Basketball, Swimming" }
    ]
  },
  {
    institution: "Sri Sathya Sai Loka Seva Educational Institutions, Alike",
    degree: "Higher School, Science",
    period: "Jun 2018 – Mar 2019",
    details: [
      { icon: <Activity size={16} />, text: "Kho-Kho, Throw Ball, Volleyball, Swimming, Cricket, Football" }
    ]
  },
  {
    institution: "Baldwin Boys' High School",
    degree: "Science, Mathematics, English, Social Science",
    period: "Jun 2011 – Mar 2018",
    details: [
      { icon: <Activity size={16} />, text: "Swimming, Cricket and Musical Instrument" }
    ]
  }
];

export const skillCategories = [
  {
    title: "AI & Quantum ML",
    icon: <BrainCircuit className="text-[var(--accent)]" size={24} />,
    skills: [
      { name: "PyTorch", usage: 90 },
      { name: "TensorFlow", usage: 85 },
      { name: "Qiskit", usage: 80 },
      { name: "Quantum SVM", usage: 75 },
    ],
  },
  {
    title: "Frontend Architecture",
    icon: <LayoutTemplate className="text-[var(--accent)]" size={24} />,
    skills: [
      { name: "TypeScript", usage: 90 },
      { name: "Next.js", usage: 85 },
      { name: "React Three Fiber", usage: 70 },
    ],
  },
  {
    title: "Backend & Systems",
    icon: <Server className="text-[var(--accent)]" size={24} />,
    skills: [
      { name: "Python", usage: 95 },
      { name: "FastAPI", usage: 85 },
    ],
  },
];
