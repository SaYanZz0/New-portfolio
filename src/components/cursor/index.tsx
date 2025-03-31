"use client"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { useEffect, useState } from "react"

export default function () {
    // Core cursor position
    const cursorX = useMotionValue(-100)
    const cursorY = useMotionValue(-100)
    
    // Interactive states
    const [cursorVariant, setCursorVariant] = useState("default")
    const [linkHovered, setLinkHovered] = useState(false)
    
    // Smooth cursor movement with spring physics
    const springConfig = { damping: 20, stiffness: 300, mass: 0.5 }
    const smoothX = useSpring(cursorX, springConfig)
    const smoothY = useSpring(cursorY, springConfig)

    // Cursor variants for different states
    const variants = {
        default: {
            height: 32,
            width: 32,
            x: "-50%",
            y: "-50%",
            backgroundColor: "rgba(255, 255, 255, 0)",
            border: "1.5px solid rgba(255, 255, 255, 0.5)",
            transition: { type: "spring", damping: 20, stiffness: 300 }
        },
        text: {
            height: 64,
            width: 64,
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            border: "1px solid rgba(255, 255, 255, 0.5)",
            x: "-50%",
            y: "-50%"
        },
        link: {
            height: 40,
            width: 40,
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            border: "none",
            x: "-50%",
            y: "-50%"
        },
        button: {
            height: 48,
            width: 48,
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            border: "none",
            x: "-50%",
            y: "-50%"
        }
    }

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX)
            cursorY.set(e.clientY)
        }

        const handleMouseDown = () => {
            setCursorVariant("button")
        }

        const handleMouseUp = () => {
            setCursorVariant(linkHovered ? "link" : "default")
        }

        // Element-specific interactions
        const handleElementMouseEnter = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            
            // Check element type and set appropriate variant
            if (target.tagName.toLowerCase() === 'a' || 
                target.tagName.toLowerCase() === 'button' ||
                target.getAttribute('role') === 'button') {
                setCursorVariant("link")
                setLinkHovered(true)
            } else if (
                target.tagName.toLowerCase() === 'p' || 
                target.tagName.toLowerCase() === 'span' ||
                target.tagName.toLowerCase() === 'h1' ||
                target.tagName.toLowerCase() === 'h2' ||
                target.tagName.toLowerCase() === 'h3'
            ) {
                setCursorVariant("text")
            }
        }

        const handleElementMouseLeave = () => {
            setCursorVariant("default")
            setLinkHovered(false)
        }

        // Add event listeners
        document.addEventListener('mousemove', moveCursor)
        document.addEventListener('mousedown', handleMouseDown)
        document.addEventListener('mouseup', handleMouseUp)

        // Add listeners to interactive elements
        const elements = document.querySelectorAll('a, button, p, span, h1, h2, h3, [role="button"]')
        elements.forEach(element => {
            element.addEventListener('mouseenter', handleElementMouseEnter as EventListener)
            element.addEventListener('mouseleave', handleElementMouseLeave as EventListener)
        })

        return () => {
            document.removeEventListener('mousemove', moveCursor)
            document.removeEventListener('mousedown', handleMouseDown)
            document.removeEventListener('mouseup', handleMouseUp)
            elements.forEach(element => {
                element.removeEventListener('mouseenter', handleElementMouseEnter as EventListener)
                element.removeEventListener('mouseleave', handleElementMouseLeave as EventListener)
            })
        }
    }, [linkHovered])

    return (
        <>
            {/* Main cursor */}
            <motion.div
                className="hidden md:block fixed pointer-events-none z-[100] mix-blend-difference"
                style={{
                    left: smoothX,
                    top: smoothY
                }}
            >
                <motion.div
                    className="rounded-full absolute"
                    variants={variants}
                    animate={cursorVariant}
                />
            </motion.div>

            {/* Dot cursor */}
            <motion.div
                className="hidden md:block fixed pointer-events-none z-[100] mix-blend-difference"
                style={{
                    left: smoothX,
                    top: smoothY
                }}
            >
                <motion.div
                    className="w-1.5 h-1.5 rounded-full bg-white absolute"
                    style={{
                        x: "-50%",
                        y: "-50%"
                    }}
                />
            </motion.div>
        </>
    )
}