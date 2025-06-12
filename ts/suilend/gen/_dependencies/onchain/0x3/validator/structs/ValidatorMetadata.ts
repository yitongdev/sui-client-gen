import * as reified from "../../../../../_framework/reified.js";
import {
  PhantomReified,
  Reified,
  StructClass,
  ToField,
  ToTypeStr,
  decodeFromFields,
  decodeFromFieldsWithTypes,
  decodeFromJSONField,
  fieldToJSON,
  phantom,
} from "../../../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
} from "../../../../../_framework/util.js";
import { Vector } from "../../../../../_framework/vector.js";
import { Option } from "../../../0x1/option/structs/index.js";
import { String } from "../../../0x1/string/structs/index.js";
import { Bag } from "../../../0x2/bag/structs/index.js";
import { Url } from "../../../0x2/url/structs/index.js";
import { PKG_V21 } from "../../constants.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64, fromHex, toHex } from "@mysten/sui/utils";

export function isValidatorMetadata(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V21}::validator::ValidatorMetadata`;
}

export interface ValidatorMetadataFields {
  suiAddress: ToField<"address">;
  protocolPubkeyBytes: ToField<Vector<"u8">>;
  networkPubkeyBytes: ToField<Vector<"u8">>;
  workerPubkeyBytes: ToField<Vector<"u8">>;
  proofOfPossession: ToField<Vector<"u8">>;
  name: ToField<String>;
  description: ToField<String>;
  imageUrl: ToField<Url>;
  projectUrl: ToField<Url>;
  netAddress: ToField<String>;
  p2PAddress: ToField<String>;
  primaryAddress: ToField<String>;
  workerAddress: ToField<String>;
  nextEpochProtocolPubkeyBytes: ToField<Option<Vector<"u8">>>;
  nextEpochProofOfPossession: ToField<Option<Vector<"u8">>>;
  nextEpochNetworkPubkeyBytes: ToField<Option<Vector<"u8">>>;
  nextEpochWorkerPubkeyBytes: ToField<Option<Vector<"u8">>>;
  nextEpochNetAddress: ToField<Option<String>>;
  nextEpochP2PAddress: ToField<Option<String>>;
  nextEpochPrimaryAddress: ToField<Option<String>>;
  nextEpochWorkerAddress: ToField<Option<String>>;
  extraFields: ToField<Bag>;
}

export type ValidatorMetadataReified = Reified<ValidatorMetadata, ValidatorMetadataFields>;

/**
 * Move struct: `ValidatorMetadata`
 * Module: `0000000000000000000000000000000000000000000000000000000000000003::validator`
 */
export class ValidatorMetadata implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V21}::validator::ValidatorMetadata`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = ValidatorMetadata.$typeName;
  readonly $fullTypeName: `${typeof PKG_V21}::validator::ValidatorMetadata`;
  readonly $typeArgs: [];
  readonly $isPhantom = ValidatorMetadata.$isPhantom;

  readonly suiAddress: ToField<"address">;
  readonly protocolPubkeyBytes: ToField<Vector<"u8">>;
  readonly networkPubkeyBytes: ToField<Vector<"u8">>;
  readonly workerPubkeyBytes: ToField<Vector<"u8">>;
  readonly proofOfPossession: ToField<Vector<"u8">>;
  readonly name: ToField<String>;
  readonly description: ToField<String>;
  readonly imageUrl: ToField<Url>;
  readonly projectUrl: ToField<Url>;
  readonly netAddress: ToField<String>;
  readonly p2PAddress: ToField<String>;
  readonly primaryAddress: ToField<String>;
  readonly workerAddress: ToField<String>;
  readonly nextEpochProtocolPubkeyBytes: ToField<Option<Vector<"u8">>>;
  readonly nextEpochProofOfPossession: ToField<Option<Vector<"u8">>>;
  readonly nextEpochNetworkPubkeyBytes: ToField<Option<Vector<"u8">>>;
  readonly nextEpochWorkerPubkeyBytes: ToField<Option<Vector<"u8">>>;
  readonly nextEpochNetAddress: ToField<Option<String>>;
  readonly nextEpochP2PAddress: ToField<Option<String>>;
  readonly nextEpochPrimaryAddress: ToField<Option<String>>;
  readonly nextEpochWorkerAddress: ToField<Option<String>>;
  readonly extraFields: ToField<Bag>;

  private constructor(typeArgs: [], fields: ValidatorMetadataFields) {
    this.$fullTypeName = composeSuiType(
      ValidatorMetadata.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V21}::validator::ValidatorMetadata`;
    this.$typeArgs = typeArgs;

    this.suiAddress = fields.suiAddress;
    this.protocolPubkeyBytes = fields.protocolPubkeyBytes;
    this.networkPubkeyBytes = fields.networkPubkeyBytes;
    this.workerPubkeyBytes = fields.workerPubkeyBytes;
    this.proofOfPossession = fields.proofOfPossession;
    this.name = fields.name;
    this.description = fields.description;
    this.imageUrl = fields.imageUrl;
    this.projectUrl = fields.projectUrl;
    this.netAddress = fields.netAddress;
    this.p2PAddress = fields.p2PAddress;
    this.primaryAddress = fields.primaryAddress;
    this.workerAddress = fields.workerAddress;
    this.nextEpochProtocolPubkeyBytes = fields.nextEpochProtocolPubkeyBytes;
    this.nextEpochProofOfPossession = fields.nextEpochProofOfPossession;
    this.nextEpochNetworkPubkeyBytes = fields.nextEpochNetworkPubkeyBytes;
    this.nextEpochWorkerPubkeyBytes = fields.nextEpochWorkerPubkeyBytes;
    this.nextEpochNetAddress = fields.nextEpochNetAddress;
    this.nextEpochP2PAddress = fields.nextEpochP2PAddress;
    this.nextEpochPrimaryAddress = fields.nextEpochPrimaryAddress;
    this.nextEpochWorkerAddress = fields.nextEpochWorkerAddress;
    this.extraFields = fields.extraFields;
  }

  static reified(): ValidatorMetadataReified {
    return {
      typeName: ValidatorMetadata.$typeName,
      fullTypeName: composeSuiType(
        ValidatorMetadata.$typeName,
        ...[],
      ) as `${typeof PKG_V21}::validator::ValidatorMetadata`,
      typeArgs: [] as [],
      isPhantom: ValidatorMetadata.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => ValidatorMetadata.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => ValidatorMetadata.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => ValidatorMetadata.fromBcs(data),
      bcs: ValidatorMetadata.bcs,
      fromJSONField: (field: any) => ValidatorMetadata.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => ValidatorMetadata.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) => ValidatorMetadata.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) => ValidatorMetadata.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) => ValidatorMetadata.fetch(client, id),
      new: (fields: ValidatorMetadataFields) => {
        return new ValidatorMetadata([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return ValidatorMetadata.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<ValidatorMetadata>> {
    return phantom(ValidatorMetadata.reified());
  }
  static get p() {
    return ValidatorMetadata.phantom();
  }

  static get bcs() {
    return bcs.struct("ValidatorMetadata", {
      sui_address: bcs.bytes(32).transform({
        input: (val: string) => fromHex(val),
        output: (val: Uint8Array) => toHex(val),
      }),
      protocol_pubkey_bytes: bcs.vector(bcs.u8()),
      network_pubkey_bytes: bcs.vector(bcs.u8()),
      worker_pubkey_bytes: bcs.vector(bcs.u8()),
      proof_of_possession: bcs.vector(bcs.u8()),
      name: String.bcs,
      description: String.bcs,
      image_url: Url.bcs,
      project_url: Url.bcs,
      net_address: String.bcs,
      p2p_address: String.bcs,
      primary_address: String.bcs,
      worker_address: String.bcs,
      next_epoch_protocol_pubkey_bytes: Option.bcs(bcs.vector(bcs.u8())),
      next_epoch_proof_of_possession: Option.bcs(bcs.vector(bcs.u8())),
      next_epoch_network_pubkey_bytes: Option.bcs(bcs.vector(bcs.u8())),
      next_epoch_worker_pubkey_bytes: Option.bcs(bcs.vector(bcs.u8())),
      next_epoch_net_address: Option.bcs(String.bcs),
      next_epoch_p2p_address: Option.bcs(String.bcs),
      next_epoch_primary_address: Option.bcs(String.bcs),
      next_epoch_worker_address: Option.bcs(String.bcs),
      extra_fields: Bag.bcs,
    });
  }

  static fromFields(fields: Record<string, any>): ValidatorMetadata {
    return ValidatorMetadata.reified().new({
      suiAddress: decodeFromFields("address", fields.sui_address),
      protocolPubkeyBytes: decodeFromFields(reified.vector("u8"), fields.protocol_pubkey_bytes),
      networkPubkeyBytes: decodeFromFields(reified.vector("u8"), fields.network_pubkey_bytes),
      workerPubkeyBytes: decodeFromFields(reified.vector("u8"), fields.worker_pubkey_bytes),
      proofOfPossession: decodeFromFields(reified.vector("u8"), fields.proof_of_possession),
      name: decodeFromFields(String.reified(), fields.name),
      description: decodeFromFields(String.reified(), fields.description),
      imageUrl: decodeFromFields(Url.reified(), fields.image_url),
      projectUrl: decodeFromFields(Url.reified(), fields.project_url),
      netAddress: decodeFromFields(String.reified(), fields.net_address),
      p2PAddress: decodeFromFields(String.reified(), fields.p2p_address),
      primaryAddress: decodeFromFields(String.reified(), fields.primary_address),
      workerAddress: decodeFromFields(String.reified(), fields.worker_address),
      nextEpochProtocolPubkeyBytes: decodeFromFields(
        Option.reified(reified.vector("u8")),
        fields.next_epoch_protocol_pubkey_bytes,
      ),
      nextEpochProofOfPossession: decodeFromFields(
        Option.reified(reified.vector("u8")),
        fields.next_epoch_proof_of_possession,
      ),
      nextEpochNetworkPubkeyBytes: decodeFromFields(
        Option.reified(reified.vector("u8")),
        fields.next_epoch_network_pubkey_bytes,
      ),
      nextEpochWorkerPubkeyBytes: decodeFromFields(
        Option.reified(reified.vector("u8")),
        fields.next_epoch_worker_pubkey_bytes,
      ),
      nextEpochNetAddress: decodeFromFields(
        Option.reified(String.reified()),
        fields.next_epoch_net_address,
      ),
      nextEpochP2PAddress: decodeFromFields(
        Option.reified(String.reified()),
        fields.next_epoch_p2p_address,
      ),
      nextEpochPrimaryAddress: decodeFromFields(
        Option.reified(String.reified()),
        fields.next_epoch_primary_address,
      ),
      nextEpochWorkerAddress: decodeFromFields(
        Option.reified(String.reified()),
        fields.next_epoch_worker_address,
      ),
      extraFields: decodeFromFields(Bag.reified(), fields.extra_fields),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): ValidatorMetadata {
    if (!isValidatorMetadata(item.type)) {
      throw new Error("not a ValidatorMetadata type");
    }

    return ValidatorMetadata.reified().new({
      suiAddress: decodeFromFieldsWithTypes("address", item.fields.sui_address),
      protocolPubkeyBytes: decodeFromFieldsWithTypes(
        reified.vector("u8"),
        item.fields.protocol_pubkey_bytes,
      ),
      networkPubkeyBytes: decodeFromFieldsWithTypes(
        reified.vector("u8"),
        item.fields.network_pubkey_bytes,
      ),
      workerPubkeyBytes: decodeFromFieldsWithTypes(
        reified.vector("u8"),
        item.fields.worker_pubkey_bytes,
      ),
      proofOfPossession: decodeFromFieldsWithTypes(
        reified.vector("u8"),
        item.fields.proof_of_possession,
      ),
      name: decodeFromFieldsWithTypes(String.reified(), item.fields.name),
      description: decodeFromFieldsWithTypes(String.reified(), item.fields.description),
      imageUrl: decodeFromFieldsWithTypes(Url.reified(), item.fields.image_url),
      projectUrl: decodeFromFieldsWithTypes(Url.reified(), item.fields.project_url),
      netAddress: decodeFromFieldsWithTypes(String.reified(), item.fields.net_address),
      p2PAddress: decodeFromFieldsWithTypes(String.reified(), item.fields.p2p_address),
      primaryAddress: decodeFromFieldsWithTypes(String.reified(), item.fields.primary_address),
      workerAddress: decodeFromFieldsWithTypes(String.reified(), item.fields.worker_address),
      nextEpochProtocolPubkeyBytes: decodeFromFieldsWithTypes(
        Option.reified(reified.vector("u8")),
        item.fields.next_epoch_protocol_pubkey_bytes,
      ),
      nextEpochProofOfPossession: decodeFromFieldsWithTypes(
        Option.reified(reified.vector("u8")),
        item.fields.next_epoch_proof_of_possession,
      ),
      nextEpochNetworkPubkeyBytes: decodeFromFieldsWithTypes(
        Option.reified(reified.vector("u8")),
        item.fields.next_epoch_network_pubkey_bytes,
      ),
      nextEpochWorkerPubkeyBytes: decodeFromFieldsWithTypes(
        Option.reified(reified.vector("u8")),
        item.fields.next_epoch_worker_pubkey_bytes,
      ),
      nextEpochNetAddress: decodeFromFieldsWithTypes(
        Option.reified(String.reified()),
        item.fields.next_epoch_net_address,
      ),
      nextEpochP2PAddress: decodeFromFieldsWithTypes(
        Option.reified(String.reified()),
        item.fields.next_epoch_p2p_address,
      ),
      nextEpochPrimaryAddress: decodeFromFieldsWithTypes(
        Option.reified(String.reified()),
        item.fields.next_epoch_primary_address,
      ),
      nextEpochWorkerAddress: decodeFromFieldsWithTypes(
        Option.reified(String.reified()),
        item.fields.next_epoch_worker_address,
      ),
      extraFields: decodeFromFieldsWithTypes(Bag.reified(), item.fields.extra_fields),
    });
  }

  static fromBcs(data: Uint8Array): ValidatorMetadata {
    return ValidatorMetadata.fromFields(ValidatorMetadata.bcs.parse(data));
  }

  toJSONField() {
    return {
      suiAddress: this.suiAddress,
      protocolPubkeyBytes: fieldToJSON<Vector<"u8">>(`vector<u8>`, this.protocolPubkeyBytes),
      networkPubkeyBytes: fieldToJSON<Vector<"u8">>(`vector<u8>`, this.networkPubkeyBytes),
      workerPubkeyBytes: fieldToJSON<Vector<"u8">>(`vector<u8>`, this.workerPubkeyBytes),
      proofOfPossession: fieldToJSON<Vector<"u8">>(`vector<u8>`, this.proofOfPossession),
      name: this.name,
      description: this.description,
      imageUrl: this.imageUrl,
      projectUrl: this.projectUrl,
      netAddress: this.netAddress,
      p2PAddress: this.p2PAddress,
      primaryAddress: this.primaryAddress,
      workerAddress: this.workerAddress,
      nextEpochProtocolPubkeyBytes: fieldToJSON<Option<Vector<"u8">>>(
        `${Option.$typeName}<vector<u8>>`,
        this.nextEpochProtocolPubkeyBytes,
      ),
      nextEpochProofOfPossession: fieldToJSON<Option<Vector<"u8">>>(
        `${Option.$typeName}<vector<u8>>`,
        this.nextEpochProofOfPossession,
      ),
      nextEpochNetworkPubkeyBytes: fieldToJSON<Option<Vector<"u8">>>(
        `${Option.$typeName}<vector<u8>>`,
        this.nextEpochNetworkPubkeyBytes,
      ),
      nextEpochWorkerPubkeyBytes: fieldToJSON<Option<Vector<"u8">>>(
        `${Option.$typeName}<vector<u8>>`,
        this.nextEpochWorkerPubkeyBytes,
      ),
      nextEpochNetAddress: fieldToJSON<Option<String>>(
        `${Option.$typeName}<${String.$typeName}>`,
        this.nextEpochNetAddress,
      ),
      nextEpochP2PAddress: fieldToJSON<Option<String>>(
        `${Option.$typeName}<${String.$typeName}>`,
        this.nextEpochP2PAddress,
      ),
      nextEpochPrimaryAddress: fieldToJSON<Option<String>>(
        `${Option.$typeName}<${String.$typeName}>`,
        this.nextEpochPrimaryAddress,
      ),
      nextEpochWorkerAddress: fieldToJSON<Option<String>>(
        `${Option.$typeName}<${String.$typeName}>`,
        this.nextEpochWorkerAddress,
      ),
      extraFields: this.extraFields.toJSONField(),
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField(field: any): ValidatorMetadata {
    return ValidatorMetadata.reified().new({
      suiAddress: decodeFromJSONField("address", field.suiAddress),
      protocolPubkeyBytes: decodeFromJSONField(reified.vector("u8"), field.protocolPubkeyBytes),
      networkPubkeyBytes: decodeFromJSONField(reified.vector("u8"), field.networkPubkeyBytes),
      workerPubkeyBytes: decodeFromJSONField(reified.vector("u8"), field.workerPubkeyBytes),
      proofOfPossession: decodeFromJSONField(reified.vector("u8"), field.proofOfPossession),
      name: decodeFromJSONField(String.reified(), field.name),
      description: decodeFromJSONField(String.reified(), field.description),
      imageUrl: decodeFromJSONField(Url.reified(), field.imageUrl),
      projectUrl: decodeFromJSONField(Url.reified(), field.projectUrl),
      netAddress: decodeFromJSONField(String.reified(), field.netAddress),
      p2PAddress: decodeFromJSONField(String.reified(), field.p2PAddress),
      primaryAddress: decodeFromJSONField(String.reified(), field.primaryAddress),
      workerAddress: decodeFromJSONField(String.reified(), field.workerAddress),
      nextEpochProtocolPubkeyBytes: decodeFromJSONField(
        Option.reified(reified.vector("u8")),
        field.nextEpochProtocolPubkeyBytes,
      ),
      nextEpochProofOfPossession: decodeFromJSONField(
        Option.reified(reified.vector("u8")),
        field.nextEpochProofOfPossession,
      ),
      nextEpochNetworkPubkeyBytes: decodeFromJSONField(
        Option.reified(reified.vector("u8")),
        field.nextEpochNetworkPubkeyBytes,
      ),
      nextEpochWorkerPubkeyBytes: decodeFromJSONField(
        Option.reified(reified.vector("u8")),
        field.nextEpochWorkerPubkeyBytes,
      ),
      nextEpochNetAddress: decodeFromJSONField(
        Option.reified(String.reified()),
        field.nextEpochNetAddress,
      ),
      nextEpochP2PAddress: decodeFromJSONField(
        Option.reified(String.reified()),
        field.nextEpochP2PAddress,
      ),
      nextEpochPrimaryAddress: decodeFromJSONField(
        Option.reified(String.reified()),
        field.nextEpochPrimaryAddress,
      ),
      nextEpochWorkerAddress: decodeFromJSONField(
        Option.reified(String.reified()),
        field.nextEpochWorkerAddress,
      ),
      extraFields: decodeFromJSONField(Bag.reified(), field.extraFields),
    });
  }

  static fromJSON(json: Record<string, any>): ValidatorMetadata {
    if (json.$typeName !== ValidatorMetadata.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return ValidatorMetadata.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): ValidatorMetadata {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isValidatorMetadata(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a ValidatorMetadata object`);
    }
    return ValidatorMetadata.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): ValidatorMetadata {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isValidatorMetadata(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a ValidatorMetadata object`);
      }

      return ValidatorMetadata.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return ValidatorMetadata.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<ValidatorMetadata> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching ValidatorMetadata object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isValidatorMetadata(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a ValidatorMetadata object`);
    }

    return ValidatorMetadata.fromSuiObjectData(res.data);
  }
}
