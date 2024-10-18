"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type TimelineItem = {
  date: string;
  title: string;
  description: string;
};

const timelineData: TimelineItem[] = [
  {
    date: "2024年4月",
    title: "裸辞",
    description: "考虑了很久，最终准备裸辞备考N2",
  },
  {
    date: "2024年4月8号",
    title: "lastday",
    description: "办离职手续",
  },
  {
    date: "2024年7月6号",
    title: "N2 考试",
    description: "在浙江大学西溪校区考场考试",
  },
  {
    date: "2024年8月底",
    title: "JLPT 出成绩",
    description: "我 N2 和康的 N1 都过了，开心😄",
  },
  {
    date: "2024年8月19",
    title: "找到了新公司，入职",
    description: "入职了新公司、又开始挣窝囊废了",
  },
  {
    date: "2024年10月1",
    title: "国庆节",
    description:
      "去了东莞我姐那里玩了几天、然后去香港玩了1天、顺便办了张银行卡",
  },
  {
    date: "2024年10月6日",
    title: "决定报语言学校",
    description:
      "得知日本入管局在留资格审查收紧，决定报语言学校过去，然后边上学边找工作",
  },
  {
    date: "2024年10月",
    title: "语言学校报名",
    description: "决定报语言学校后，开始联系中介、选择学校、学校面试、资料递交",
  },
];

export default function Page() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8 text-center">人生事件时间轴</h2>
      <div className="relative wrap overflow-hidden p-10 h-full">
        <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border left-[47.5px] md:left-1/2"></div>
        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            className={`mb-8 flex justify-between items-center w-full gap-4 ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="order-1 w-5/12 hidden md:block"></div>
            <motion.div
              className="z-20 flex items-center order-1"
              whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
            >
              <h1 className="mx-auto font-semibold hidden md:block">{item.date}</h1>
              <span className="mx-auto font-semibold md:hidden w-4 h-4 bg-black rounded-full"></span>
            </motion.div>
            <motion.div
              className="order-1 bg-gray-100 rounded-lg shadow-xl md:w-5/12 px-6 py-4 w-11/12"
              initial={{ scale: 0 }}
              animate={isVisible ? { scale: 1 } : {}}
              whileHover={{
                scale: 1.03,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                transition: { duration: 0.2 },
              }}
            >
              <h3 className="mb-3 font-bold text-gray-800 text-xl">
                {item.title}
              </h3>
              <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                {item.description}
              </p>
              <p className="text-sm leading-snug tracking-wide text-gray-500 text-opacity-100 md:hidden mt-3">
                {item.date}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
