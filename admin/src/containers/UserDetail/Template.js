import moment from 'moment'
import conDau from '../../assets/asign.jpg'
export default ({ contract, user }) => {
  return (
    <div style={{ padding: 20, display: 'flex' }}>
      <div style={{ paddingRight: 30 }}>
        <h4>
          <center>CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</center>
        </h4>
        <h4>
          <center>ĐỘC LẬP - TỰ DO - HANH PHÚC</center>
        </h4>
        <br />
        <h4>
          <center>HỢP ĐỒNG VAY TIỀN</center>
        </h4>

        <h4>Thông tin cơ bản về khoản vay</h4>
        <p>Bên A ( Bên cho vay ) CÔNG TY TNHH MTV TC MCREDIT</p>
        <p>Bên B ( Bên vay ) Ông / Bà : {user?.kyc?.name}</p>
        <p> Số CMT / CCCD : {user?.kyc?.id_number}</p>
        <p>Ngày ký : {moment(contract?.created_at).format('hh:mm A DD/MM/YYYY')}</p>
        <p>Số tiền khoản vay : {contract?.amount?.toLocaleString()} VNĐ</p>
        <p>Mã hợp đồng : {contract?.slug} VNĐ</p>

        <p>Thời gian vay : {contract?.times} tháng</p>
        <p>lãi suất cho vay là 0.8% mỗi tháng</p>
        <p>
          Hợp đồng nêu rõ các bên đã đặt được thỏa thuận vay sau khi thương lượng và trên cơ sở bình
          đẳng , tự nguyện và nhất trí . Tất cả các bên cần đọc kỹ tất cả các điều khoản trong thỏa
          thuận này, sau khi ký vào thỏa thuận này coi như các bên đã hiểu đầy đủ và đồng ý hoàn
          toàn với tất cả các điều khoản và nội dung trong thỏa thuân này.
        </p>
        <p>
          1.Phù hợp với các nguyên tắc bình đẳng , tự nguyện , trung thực và uy tín , hai bên thống
          nhất ký kết hợp đồng vay sau khi thương lượng và cùng cam kết thực hiện.
        </p>
        <p>
          2.Bên B cung cấp tài liệu đính kèm của hợp đồng vay và có hiệu lực pháp lý như hợp đồng
          vay này.
        </p>
        <p>
          3.Bên B sẽ tạo lệnh tính tiền gốc và lãi dựa trên số tiền vay từ ví ứng dụng do bên A cung
          cấp.
        </p>
        <p>4.Điều khoản đảm bảo.</p>
        <p>
          - Bên vay không được sử dụng tiền vay để thực hiện các hoạt động bất hợp pháp .Nếu không ,
          bên A có quyền yêu cầu bên B hoàn trả ngay tiền gốc và lãi , bên B phải chịu các trách
          nhiêm pháp lý phát sinh từ đó.
        </p>
        <p>
          - Bên vay phải trả nợ gốc và lãi trong thời gian quy định hợp đồng. Đối với phần quá hạn ,
          người cho vay có quyền thu hồi nơ trong thời hạn và thu ( lãi quá hạn ) % trên tổng số
          tiền vay trong ngày.
        </p>
        <p>
          - Gốc và lãi của mỗi lần trả nợ sẽ được hệ thống tự động chuyển từ tài khoản ngân hàng do
          bên B bảo lưu sang tài khoản ngân hàng của bên A . Bên B phải đảm bảo có đủ tiền trong tài
          khoản ngân hàng trước ngày trả nợ hàng tháng.
        </p>
      </div>
      <div>
        <p>5.Chịu trách nhiệm do vi pham hợp đồng</p>
        <p>
          - Nếu bên B không trả được khoản vay theo quy định trong hợp đồng. Bên B phải chịu các
          khoản bồi thường thiệt hại đã thanh lý và phí luật sư, phí kiện tựng, chi phí đi lại và
          các chi phí khác phát sinh do kiện tựng.
        </p>
        <p>
          - Khi bên A cho rẳng bên B đã hoặc có thể xảy ra tình huống ảnh hưởng đến khoản vay thì
          bên A có quyền yêu cầu bên B phải trả lại kịp thời trược thời hạn.
        </p>
        <p>- Người vay và người bảo lãnh không được vi phạm điều lệ hợp đồng vì bất kỳ lý do gì</p>

        <p>
          6.Phương thức giải quyết tranh chấp hợp đồng. <br />
          Tranh chấp phát sinh trong quá trình thực hiện hợp đồng này sẽ được giải quyết thông qua
          thương lượng thân thiện giữa các bên hoặc có thể nhờ bên thứ ba làm trung gian hòa giải
          .Nếu thương lượng hoặc hòa giải không thành , có thể khởi kiện ra tòa án nhân dân nơi bên
          A có trụ sở.
        </p>
        <p>
          7.Khi người vay trong quá trình xét duyệt khoản vay không thành công do nhiều yếu tố khác
          nhau như chứng minh thư sai, thẻ ngân hàng sai , danh bạ sai. Việc thông tin sai lệch này
          sẽ khiến hệ thống phát hiện nghi ngờ gian lận hoặc giả mạo khoản vay và bên vay phải chủ
          động hợp tác với bên A để xử lý.
        </p>
        <p>
          8.Nếu không hợp tác. Bên A có quyền khởi kiện ra Tòa án nhân dân và trình báo lên Trung
          tâm Báo cáo tín dụng của Ngân hàng nhà nước Việt Nam , hồ sơ nợ xấu sẽ được phản ánh trong
          báo cáo tín dụng , ảnh hưởng đến tín dụng sau này của người vay , vay vốn ngân hàng và hạn
          chế tiều dùng của người thân , con cái người vay ...
        </p>
        <br />

        <div style={{ display: 'flex', justifyContent: 'space-around', padding: '0 20px' }}>
          <div>
            <p style={{ textAlign: 'center', fontWeight: 'bold' }}>Bên vay</p>
            <img src={`${contract?.signature_capture}`} width="200px" />
            <h5 style={{ textAlign: 'center', fontWeight: 'bold' }}>{user?.kyc?.name}</h5>
          </div>
          <div>
            <p style={{ textAlign: 'center', fontWeight: 'bold', position: 'relative' }}>
              Bên cho vay
            </p>
            <img src={conDau} width="200px" style={{ marginTop: '-10px', marginLeft: '26px' }} />
          </div>
        </div>
      </div>
    </div>
  )
}
