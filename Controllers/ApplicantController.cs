using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HannaApplicationProcess.December20.Web.DataContext;
using HannaApplicationProcess.December20.Web.Models;
//using Microsoft.AspNetCore.Mvc;
using System.Web.Http;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using System.Web.Helpers;
using System.Runtime.Serialization.Json;

namespace HannaApplicationProcess.December20.Web.Controllers
{
    
    [RoutePrefix("Applicant")]
    public class ApplicantController : ApiController
    {
        private ApplicantDBContext _context;

        public ApplicantController(ApplicantDBContext context)
        {
            _context = context;
        }

        [Route("GetAll")]
        [HttpGet]
        public List<Applicant> GetAll()
        {
            var applicants = _context.Applicants.ToList();
            return applicants;
        }


        [Route("Add")]
        [HttpPost]
        public List<Applicant> Add([FromBody] string data)
        {
            Applicant applicant = JsonConvert.DeserializeObject<Applicant>(data);
            var newID = _context.Applicants.Select(x => x.id).Max() + 1;
            applicant.id = newID;
             _context.Applicants.Add(applicant);
             _context.SaveChanges();
             return _context.Applicants.ToList();

        }

        [Route("Delete")]
        [HttpPost]
        public List<Applicant> Delete([FromBody] int id)
        {
            _context.Applicants.Remove(_context.Applicants.Find(id));
            _context.SaveChanges();
            return _context.Applicants.ToList();
        }

      
        [Route("Update")]
        [HttpPut]
        public List<Applicant> Update([FromBody] string data)
        {
            Applicant applicant = JsonConvert.DeserializeObject<Applicant>(data);
            _context.Applicants.Update(applicant);
            _context.SaveChanges();
            return _context.Applicants.ToList();

        }
    }


    public class Error
    {
        public int HttpCode { get; set; }
        public string Message { get; set; }
    }
}