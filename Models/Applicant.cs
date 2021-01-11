using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.Runtime.Serialization;

namespace HannaApplicationProcess.December20.Web.Models
{
    [DataContract]
    public class Applicant
    {
        [Key]
        [DataMember]
        public int id { get; set; }

        [DataMember]
        public string name { get; set; }

        [DataMember]
        public string familyName { get; set; }

        [DataMember]
        public string address { get; set; }

        [DataMember]
        public string countryOfOrigin { get; set; }

        [DataMember]
        public string emailAddress { get; set; }

        [DataMember]
        public int age { get; set; }

        [DataMember]
        public bool hired
        {
            get;
            set;
        }
    }
}
