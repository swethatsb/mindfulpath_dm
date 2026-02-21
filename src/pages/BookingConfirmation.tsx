import { useLocation, useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { PartyPopper } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BookingConfirmation() {
  const location = useLocation();
  const navigate = useNavigate();
  const data = (location.state as any) || {};

  return (
    <main className="section-padding">
      <div className="container-wellness max-w-2xl mx-auto text-center">
        <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
          <PartyPopper className="w-10 h-10 text-primary" />
        </div>
        <h2 className="text-3xl font-bold mb-2">Booking Confirmed!</h2>
        <p className="text-muted-foreground mb-6">Your appointment has been successfully scheduled.</p>

        <div className="bg-muted/50 rounded-lg p-6 mb-8 space-y-3 text-left">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Reference</span>
            <span className="font-semibold">{data.bookingRef || "—"}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Service</span>
            <span className="font-medium">{data.service?.name || data.service || "—"}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Therapist</span>
            <span className="font-medium">{data.therapist?.name || data.therapist || "—"}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Date</span>
            <span className="font-medium">{data.date ? format(new Date(data.date), "MMM d, yyyy") : "—"}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Time</span>
            <span className="font-medium">{data.time || "—"}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Mode</span>
            <span className="font-medium">{data.mode || "—"}</span>
          </div>
          <div className="flex justify-between border-t pt-3">
            <span className="font-medium">Total</span>
            <span className="font-bold text-primary">{data.price || "—"}</span>
          </div>
        </div>

        <div className="flex gap-4 justify-center">
          <Button variant="outline" onClick={() => navigate("/")}>Back to Home</Button>
          <Button onClick={() => navigate("/booking")}>Book Another Session</Button>
        </div>
      </div>
    </main>
  );
}
