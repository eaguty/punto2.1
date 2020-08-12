using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Tracker;
namespace PuntoTracker
{
    /// <summary>
    /// Descripción breve de gather
    /// </summary>
    public class gather : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            TrackerDataContext context2 = new TrackerDataContext();

            context.Response.AddHeader("Access-Control-Allow-Origin", "*");
            context.Response.AddHeader("Access-Control-Allow-Methods", "POST");
            context.Response.AddHeader("Access-Control-Allow-Headers", "Content-Type, Accept");

            String SessionID = Tracker.Session.Harvest();
            String URL = context.Request.Headers["url"] != null ? context.Request.Headers["url"] : "No se pudo obtener la URL de origen";
            String Referrer = context.Request.Headers["referrer"] != null ? context.Request.Headers["referrer"] : "La página no tiene referrer";
            String QueryString = context.Request.Headers["qs"] != null ? context.Request.Headers["qs"] : "Esta página no recibe parámetros";
            String UserAgent = context.Request.Headers["ua"] != null ? context.Request.Headers["ua"] : "Null";
            String PageTitle = context.Request.Headers["pt"] != null ? context.Request.Headers["pt"] : "No se puede recuperar el título de la página";
            String Lenguaje = context.Request.Headers["l"] != null ? context.Request.Headers["l"] : "es";
            //int idSitio = Convert.ToInt32(ConfigurationManager.AppSettings["Id_Sitio"]);

            if (context.Request.Headers["op"] != null && Convert.ToInt32(1) == 1)
            {

                String evento = context.Request.Headers["evento"] != null ? context.Request.Headers["evento"] : "orphan-trigger";
                Int32 posx = context.Request.Headers["posx"] != null ? Convert.ToInt32(context.Request.Headers["posx"]) : -7000;
                Int32 posy = context.Request.Headers["posy"] != null ? Convert.ToInt32(context.Request.Headers["posy"]) : -7000;
                Int32 screenx = context.Request.Headers["screenx"] != null ? Convert.ToInt32(context.Request.Headers["screenx"]) : -7000;
                Int32 screeny = context.Request.Headers["screeny"] != null ? Convert.ToInt32(context.Request.Headers["screeny"]) : -7000;
                String htmlid = context.Request.Headers["htmlid"] != null ? context.Request.Headers["htmlid"] : "no-element-id";
                String htmlcssclass = context.Request.Headers["htmlcss"] != null ? context.Request.Headers["htmlcss"] : "no-element-class";

                Tracker.TrackerDataContext context3 = new TrackerDataContext();
                context3.IHeatMapData(evento, posx, posy, screenx, screeny, htmlid, htmlcssclass, URL, 1);

            }
            else
            {
                Tracker.Session.InsertPageView(SessionID, URL, Referrer, QueryString, UserAgent, PageTitle, "0", Lenguaje, 1);
            }
           
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