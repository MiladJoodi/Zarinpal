import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { contactMethods } from "./data";

const ContactMethods = () => {
    return (
        <section className="py-20 -mt-10 relative z-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {contactMethods.map((method, index) => (
                        <Card
                            key={index}
                            className="hover:shadow-xl transition-all duration-300 group border-0 bg-card/80 backdrop-blur-sm"
                        >
                            <CardContent className="p-6 text-center">
                                <div
                                    className={`w-16 h-16 rounded-2xl ${method.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                                >
                                    <method.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-lg font-bold mb-2">{method.title}</h3>
                                <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
                                <p className="font-medium text-foreground mb-4">{method.value}</p>
                                <Button
                                    size="sm"
                                    variant="outline"
                                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground bg-transparent"
                                >
                                    {method.action}
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ContactMethods;