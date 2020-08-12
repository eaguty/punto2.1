using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Tracker;

namespace PuntoTracker
{
    /// <summary>
    /// Descripción breve de endsess
    /// </summary>
    public class endsess : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            context.Response.AddHeader("Access-Control-Allow-Origin", "*");
            context.Response.AddHeader("Access-Control-Allow-Methods", "POST");
            context.Response.AddHeader("Access-Control-Allow-Headers", "Content-Type, Accept");
            TrackerDataContext context2 = new TrackerDataContext();
            String SessionID = Tracker.Session.Finalize();
            
            
        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}