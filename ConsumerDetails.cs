namespace ProjectDSK
{
    public class ConsumerDetails
    {
        public string RequestNo { get; set; }
        public string ConsumerType { get; set; }
        public string Title { get; set; }
        public string Name { get; set; }
        public string salutation { get; set; }
        public string FHname { get; set; }
        public string FirmName { get; set; }
        public string Authorname { get; set; }
        public string DesigOfSig { get; set; }
        public string OrgType { get; set; }
        public string IncorpDate { get; set; }
        public string GSTNo { get; set; }
        public string PANNo { get; set; }
        public byte[] ImageData { get; set; }
        public byte[] SignatureData { get; set; }
    }
    public class MyRequest: ConsumerDetails
    {
        public string RequestNo { get; set; }
        public string Company { get; set; }
        public string District { get; set;}
        public string RequestType { get; set; }
        public string Email { get; set; }
        public string MobileNo { get; set; }
        public DateOnly EntryDate { get; set; }
    }
}