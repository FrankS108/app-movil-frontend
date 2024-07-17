import { useClickAway } from "react-use";
import { useRef } from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import { routes } from "../Routes";
import styles from "../styles/NavMobile.module.css"

export const NavMobile = () => {
    const [isOpen, setOpen] = useState(false);
    const ref = useRef(null);

    useClickAway(ref, () => setOpen(false));


    const handleClickMenu = () => {
        console.log("Hola")
        setOpen(!isOpen);
        document.body.style.overflow = !isOpen ? 'hidden' : 'unset';
        console.log(document.body.style.overflow)
    }

    return (
        <div ref={ref}>
        <AnimatePresence>
        <Hamburger toggled={isOpen} size={20} toggle={handleClickMenu} color="#000000"/>
            {isOpen && (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className={styles.navMenu}
            >
                <ul>
                {routes.map((route, index) => {
                        //const { Icon } = route;
                    console.log(`${route.title} - ${index}`)
                    return (
                    <motion.li
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 0.1 + index / 10,
                        }}
                        key={`${route.title} - ${index}`}
                        className="w-full p-[0.08rem] rounded-xl bg-gradient-to-tr from-neutral-800 via-neutral-950 to-neutral-700"
                    >
                        <a
                        onClick={() => setOpen((prev) => !prev)}
                        className={
                            "flex items-center justify-between w-full p-5 rounded-xl bg-neutral-950"
                        }
                        href={route.href}
                        >
                        <span className="flex gap-1 text-lg">{route.title}</span>
                        {/* <Icon className="text-xl" /> */}
                        </a>
                    </motion.li>
                    );
                })}
                </ul>
            </motion.div>
            )}
        </AnimatePresence>
        </div>
    );
};