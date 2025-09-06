"use client"

import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Briefcase, Info, Linkedin, Twitter, User } from "lucide-react"
import { teamMembers } from "@/lib/data"
import { useState } from "react"

const TeamSection = () => {

    const [filter, setFilter] = useState("all")
    const positions = Array.from(new Set(teamMembers.map(m => m.position)))
    const filteredMembers = filter === "all" ? teamMembers : teamMembers.filter(m => m.position === filter)

    return (
        <section className="py-20 bg-gradient-to-br from-muted/50 to-card">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-heavy mb-4">تیم ما</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        متخصصان با تجربه‌ای که با تلاش شبانه‌روزی، زرین‌پال را به پیشرو صنعت تبدیل کرده‌اند
                    </p>

                    {/* Filter */}
                    <div className="flex justify-center text-sm gap-4 mt-6 flex-wrap">
                        <button
                            onClick={() => setFilter("all")}
                            className={`px-4 py-2 rounded-full border cursor-pointer transition-colors duration-150 ${filter === "all"
                                    ? "bg-primary text-white border-primary"
                                    : "bg-white text-primary border-primary dark:bg-slate-800 dark:text-white dark:border-slate-700"
                                }`}
                        >
                            همه
                        </button>
                        {positions.map(pos => (
                            <button
                                key={pos}
                                onClick={() => setFilter(pos)}
                                className={`px-4 py-2 rounded-full border cursor-pointer hover:bg-primary/10 transition-colors duration-150 ${filter === pos
                                        ? "bg-primary text-white border-primary"
                                        : "bg-white text-primary border-primary dark:bg-slate-800 dark:text-white dark:border-slate-700"
                                    }`}
                            >
                                {pos}
                            </button>
                        ))}
                    </div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredMembers.map((member) => (
                        <Card key={member.id} className="py-0 overflow-hidden hover:shadow-xl transition-all duration-300 group">
                            <div className="relative">
                                <img
                                    src={member.image || "/placeholder.svg"}
                                    alt={member.name}
                                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            <CardContent className="p-6 flex flex-col h-full">

                                <div className="flex items-center gap-2 mb-2">
                                    <User className="w-4 h-4 text-muted-foreground opacity-50" />
                                    <h3 className="text-xl font-bold">{member.name}</h3>
                                </div>

                                <div className="flex items-center gap-2 mb-2">
                                    <Briefcase className="w-4 h-4 text-accent opacity-50" />
                                    <p className="text-primary font-medium">{member.position}</p>
                                </div>

                                <div className="flex items-start gap-2 mb-4">
                                    <Info className="w-4 h-4 text-muted-foreground opacity-40 mt-0.5" />
                                    <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                                </div>



                                <div className="flex self-end gap-3 mt-auto">
                                    {[
                                        { href: member.linkedin, icon: <Linkedin className="w-4 h-4 text-muted-foreground" /> },
                                        { href: member.twitter, icon: <Twitter className="w-4 h-4 text-muted-foreground" /> },
                                        { href: `mailto:#`, icon: <svg className="w-4 h-4 text-muted-foreground" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" /></svg> },
                                        { href: "#", icon: <svg className="w-4 h-4 text-muted-foreground" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.111.82-.261.82-.577 0-.285-.011-1.04-.017-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.84 1.238 1.84 1.238 1.07 1.834 2.809 1.304 3.495.997.108-.774.418-1.304.76-1.604-2.665-.304-5.467-1.332-5.467-5.932 0-1.31.468-2.381 1.236-3.221-.124-.303-.536-1.523.117-3.176 0 0 1.008-.323 3.3 1.23a11.48 11.48 0 016 0c2.292-1.553 3.3-1.23 3.3-1.23.653 1.653.241 2.873.118 3.176.77.84 1.236 1.911 1.236 3.221 0 4.61-2.805 5.625-5.478 5.922.43.37.813 1.102.813 2.222 0 1.604-.015 2.896-.015 3.286 0 .319.218.694.825.576C20.565 21.796 24 17.303 24 12c0-6.627-5.373-12-12-12z" /></svg> },
                                        { href: "#", icon: <svg className="w-4 h-4 text-muted-foreground" fill="currentColor" viewBox="0 0 24 24"><path d="M7.5 2h9A5.5 5.5 0 0122 7.5v9a5.5 5.5 0 01-5.5 5.5h-9A5.5 5.5 0 012 16.5v-9A5.5 5.5 0 017.5 2zm0 2A3.5 3.5 0 004 7.5v9A3.5 3.5 0 007.5 20h9a3.5 3.5 0 003.5-3.5v-9A3.5 3.5 0 0016.5 4h-9zm9 1a1 1 0 110 2 1 1 0 010-2zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z" /></svg> }
                                    ].map((social, idx) => (
                                        <Link
                                            key={idx}
                                            href={social.href}
                                            className="w-8 h-8 rounded-full bg-slate-200 border border-slate-300 flex items-center justify-center hover:bg-muted/30 transition-colors"
                                        >
                                            {social.icon}
                                        </Link>
                                    ))}
                                </div>



                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TeamSection;