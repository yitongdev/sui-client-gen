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
import { PKG_V21 } from "../../constants.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64, fromHex, toHex } from "@mysten/sui/utils";

export function isGenesisValidatorMetadata(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V21}::genesis::GenesisValidatorMetadata`;
}

export interface GenesisValidatorMetadataFields {
  name: ToField<Vector<"u8">>;
  description: ToField<Vector<"u8">>;
  imageUrl: ToField<Vector<"u8">>;
  projectUrl: ToField<Vector<"u8">>;
  suiAddress: ToField<"address">;
  gasPrice: ToField<"u64">;
  commissionRate: ToField<"u64">;
  protocolPublicKey: ToField<Vector<"u8">>;
  proofOfPossession: ToField<Vector<"u8">>;
  networkPublicKey: ToField<Vector<"u8">>;
  workerPublicKey: ToField<Vector<"u8">>;
  networkAddress: ToField<Vector<"u8">>;
  p2PAddress: ToField<Vector<"u8">>;
  primaryAddress: ToField<Vector<"u8">>;
  workerAddress: ToField<Vector<"u8">>;
}

export type GenesisValidatorMetadataReified = Reified<
  GenesisValidatorMetadata,
  GenesisValidatorMetadataFields
>;

/**
 * Move struct: `GenesisValidatorMetadata`
 * Module: `0000000000000000000000000000000000000000000000000000000000000003::genesis`
 */
export class GenesisValidatorMetadata implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V21}::genesis::GenesisValidatorMetadata`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = GenesisValidatorMetadata.$typeName;
  readonly $fullTypeName: `${typeof PKG_V21}::genesis::GenesisValidatorMetadata`;
  readonly $typeArgs: [];
  readonly $isPhantom = GenesisValidatorMetadata.$isPhantom;

  readonly name: ToField<Vector<"u8">>;
  readonly description: ToField<Vector<"u8">>;
  readonly imageUrl: ToField<Vector<"u8">>;
  readonly projectUrl: ToField<Vector<"u8">>;
  readonly suiAddress: ToField<"address">;
  readonly gasPrice: ToField<"u64">;
  readonly commissionRate: ToField<"u64">;
  readonly protocolPublicKey: ToField<Vector<"u8">>;
  readonly proofOfPossession: ToField<Vector<"u8">>;
  readonly networkPublicKey: ToField<Vector<"u8">>;
  readonly workerPublicKey: ToField<Vector<"u8">>;
  readonly networkAddress: ToField<Vector<"u8">>;
  readonly p2PAddress: ToField<Vector<"u8">>;
  readonly primaryAddress: ToField<Vector<"u8">>;
  readonly workerAddress: ToField<Vector<"u8">>;

  private constructor(typeArgs: [], fields: GenesisValidatorMetadataFields) {
    this.$fullTypeName = composeSuiType(
      GenesisValidatorMetadata.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V21}::genesis::GenesisValidatorMetadata`;
    this.$typeArgs = typeArgs;

    this.name = fields.name;
    this.description = fields.description;
    this.imageUrl = fields.imageUrl;
    this.projectUrl = fields.projectUrl;
    this.suiAddress = fields.suiAddress;
    this.gasPrice = fields.gasPrice;
    this.commissionRate = fields.commissionRate;
    this.protocolPublicKey = fields.protocolPublicKey;
    this.proofOfPossession = fields.proofOfPossession;
    this.networkPublicKey = fields.networkPublicKey;
    this.workerPublicKey = fields.workerPublicKey;
    this.networkAddress = fields.networkAddress;
    this.p2PAddress = fields.p2PAddress;
    this.primaryAddress = fields.primaryAddress;
    this.workerAddress = fields.workerAddress;
  }

  static reified(): GenesisValidatorMetadataReified {
    return {
      typeName: GenesisValidatorMetadata.$typeName,
      fullTypeName: composeSuiType(
        GenesisValidatorMetadata.$typeName,
        ...[],
      ) as `${typeof PKG_V21}::genesis::GenesisValidatorMetadata`,
      typeArgs: [] as [],
      isPhantom: GenesisValidatorMetadata.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) =>
        GenesisValidatorMetadata.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        GenesisValidatorMetadata.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => GenesisValidatorMetadata.fromBcs(data),
      bcs: GenesisValidatorMetadata.bcs,
      fromJSONField: (field: any) =>
        GenesisValidatorMetadata.fromJSONField(field),
      fromJSON: (json: Record<string, any>) =>
        GenesisValidatorMetadata.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        GenesisValidatorMetadata.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        GenesisValidatorMetadata.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) =>
        GenesisValidatorMetadata.fetch(client, id),
      new: (fields: GenesisValidatorMetadataFields) => {
        return new GenesisValidatorMetadata([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return GenesisValidatorMetadata.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<GenesisValidatorMetadata>> {
    return phantom(GenesisValidatorMetadata.reified());
  }
  static get p() {
    return GenesisValidatorMetadata.phantom();
  }

  static get bcs() {
    return bcs.struct("GenesisValidatorMetadata", {
      name: bcs.vector(bcs.u8()),
      description: bcs.vector(bcs.u8()),
      image_url: bcs.vector(bcs.u8()),
      project_url: bcs.vector(bcs.u8()),
      sui_address: bcs.bytes(32).transform({
        input: (val: string) => fromHex(val),
        output: (val: Uint8Array) => toHex(val),
      }),
      gas_price: bcs.u64(),
      commission_rate: bcs.u64(),
      protocol_public_key: bcs.vector(bcs.u8()),
      proof_of_possession: bcs.vector(bcs.u8()),
      network_public_key: bcs.vector(bcs.u8()),
      worker_public_key: bcs.vector(bcs.u8()),
      network_address: bcs.vector(bcs.u8()),
      p2p_address: bcs.vector(bcs.u8()),
      primary_address: bcs.vector(bcs.u8()),
      worker_address: bcs.vector(bcs.u8()),
    });
  }

  static fromFields(fields: Record<string, any>): GenesisValidatorMetadata {
    return GenesisValidatorMetadata.reified().new({
      name: decodeFromFields(reified.vector("u8"), fields.name),
      description: decodeFromFields(reified.vector("u8"), fields.description),
      imageUrl: decodeFromFields(reified.vector("u8"), fields.image_url),
      projectUrl: decodeFromFields(reified.vector("u8"), fields.project_url),
      suiAddress: decodeFromFields("address", fields.sui_address),
      gasPrice: decodeFromFields("u64", fields.gas_price),
      commissionRate: decodeFromFields("u64", fields.commission_rate),
      protocolPublicKey: decodeFromFields(
        reified.vector("u8"),
        fields.protocol_public_key,
      ),
      proofOfPossession: decodeFromFields(
        reified.vector("u8"),
        fields.proof_of_possession,
      ),
      networkPublicKey: decodeFromFields(
        reified.vector("u8"),
        fields.network_public_key,
      ),
      workerPublicKey: decodeFromFields(
        reified.vector("u8"),
        fields.worker_public_key,
      ),
      networkAddress: decodeFromFields(
        reified.vector("u8"),
        fields.network_address,
      ),
      p2PAddress: decodeFromFields(reified.vector("u8"), fields.p2p_address),
      primaryAddress: decodeFromFields(
        reified.vector("u8"),
        fields.primary_address,
      ),
      workerAddress: decodeFromFields(
        reified.vector("u8"),
        fields.worker_address,
      ),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): GenesisValidatorMetadata {
    if (!isGenesisValidatorMetadata(item.type)) {
      throw new Error("not a GenesisValidatorMetadata type");
    }

    return GenesisValidatorMetadata.reified().new({
      name: decodeFromFieldsWithTypes(reified.vector("u8"), item.fields.name),
      description: decodeFromFieldsWithTypes(
        reified.vector("u8"),
        item.fields.description,
      ),
      imageUrl: decodeFromFieldsWithTypes(
        reified.vector("u8"),
        item.fields.image_url,
      ),
      projectUrl: decodeFromFieldsWithTypes(
        reified.vector("u8"),
        item.fields.project_url,
      ),
      suiAddress: decodeFromFieldsWithTypes("address", item.fields.sui_address),
      gasPrice: decodeFromFieldsWithTypes("u64", item.fields.gas_price),
      commissionRate: decodeFromFieldsWithTypes(
        "u64",
        item.fields.commission_rate,
      ),
      protocolPublicKey: decodeFromFieldsWithTypes(
        reified.vector("u8"),
        item.fields.protocol_public_key,
      ),
      proofOfPossession: decodeFromFieldsWithTypes(
        reified.vector("u8"),
        item.fields.proof_of_possession,
      ),
      networkPublicKey: decodeFromFieldsWithTypes(
        reified.vector("u8"),
        item.fields.network_public_key,
      ),
      workerPublicKey: decodeFromFieldsWithTypes(
        reified.vector("u8"),
        item.fields.worker_public_key,
      ),
      networkAddress: decodeFromFieldsWithTypes(
        reified.vector("u8"),
        item.fields.network_address,
      ),
      p2PAddress: decodeFromFieldsWithTypes(
        reified.vector("u8"),
        item.fields.p2p_address,
      ),
      primaryAddress: decodeFromFieldsWithTypes(
        reified.vector("u8"),
        item.fields.primary_address,
      ),
      workerAddress: decodeFromFieldsWithTypes(
        reified.vector("u8"),
        item.fields.worker_address,
      ),
    });
  }

  static fromBcs(data: Uint8Array): GenesisValidatorMetadata {
    return GenesisValidatorMetadata.fromFields(
      GenesisValidatorMetadata.bcs.parse(data),
    );
  }

  toJSONField() {
    return {
      name: fieldToJSON<Vector<"u8">>(`vector<u8>`, this.name),
      description: fieldToJSON<Vector<"u8">>(`vector<u8>`, this.description),
      imageUrl: fieldToJSON<Vector<"u8">>(`vector<u8>`, this.imageUrl),
      projectUrl: fieldToJSON<Vector<"u8">>(`vector<u8>`, this.projectUrl),
      suiAddress: this.suiAddress,
      gasPrice: this.gasPrice.toString(),
      commissionRate: this.commissionRate.toString(),
      protocolPublicKey: fieldToJSON<Vector<"u8">>(
        `vector<u8>`,
        this.protocolPublicKey,
      ),
      proofOfPossession: fieldToJSON<Vector<"u8">>(
        `vector<u8>`,
        this.proofOfPossession,
      ),
      networkPublicKey: fieldToJSON<Vector<"u8">>(
        `vector<u8>`,
        this.networkPublicKey,
      ),
      workerPublicKey: fieldToJSON<Vector<"u8">>(
        `vector<u8>`,
        this.workerPublicKey,
      ),
      networkAddress: fieldToJSON<Vector<"u8">>(
        `vector<u8>`,
        this.networkAddress,
      ),
      p2PAddress: fieldToJSON<Vector<"u8">>(`vector<u8>`, this.p2PAddress),
      primaryAddress: fieldToJSON<Vector<"u8">>(
        `vector<u8>`,
        this.primaryAddress,
      ),
      workerAddress: fieldToJSON<Vector<"u8">>(
        `vector<u8>`,
        this.workerAddress,
      ),
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField(field: any): GenesisValidatorMetadata {
    return GenesisValidatorMetadata.reified().new({
      name: decodeFromJSONField(reified.vector("u8"), field.name),
      description: decodeFromJSONField(reified.vector("u8"), field.description),
      imageUrl: decodeFromJSONField(reified.vector("u8"), field.imageUrl),
      projectUrl: decodeFromJSONField(reified.vector("u8"), field.projectUrl),
      suiAddress: decodeFromJSONField("address", field.suiAddress),
      gasPrice: decodeFromJSONField("u64", field.gasPrice),
      commissionRate: decodeFromJSONField("u64", field.commissionRate),
      protocolPublicKey: decodeFromJSONField(
        reified.vector("u8"),
        field.protocolPublicKey,
      ),
      proofOfPossession: decodeFromJSONField(
        reified.vector("u8"),
        field.proofOfPossession,
      ),
      networkPublicKey: decodeFromJSONField(
        reified.vector("u8"),
        field.networkPublicKey,
      ),
      workerPublicKey: decodeFromJSONField(
        reified.vector("u8"),
        field.workerPublicKey,
      ),
      networkAddress: decodeFromJSONField(
        reified.vector("u8"),
        field.networkAddress,
      ),
      p2PAddress: decodeFromJSONField(reified.vector("u8"), field.p2PAddress),
      primaryAddress: decodeFromJSONField(
        reified.vector("u8"),
        field.primaryAddress,
      ),
      workerAddress: decodeFromJSONField(
        reified.vector("u8"),
        field.workerAddress,
      ),
    });
  }

  static fromJSON(json: Record<string, any>): GenesisValidatorMetadata {
    if (json.$typeName !== GenesisValidatorMetadata.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return GenesisValidatorMetadata.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): GenesisValidatorMetadata {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isGenesisValidatorMetadata(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a GenesisValidatorMetadata object`,
      );
    }
    return GenesisValidatorMetadata.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): GenesisValidatorMetadata {
    if (data.bcs) {
      if (
        data.bcs.dataType !== "moveObject" ||
        !isGenesisValidatorMetadata(data.bcs.type)
      ) {
        throw new Error(`object at is not a GenesisValidatorMetadata object`);
      }

      return GenesisValidatorMetadata.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return GenesisValidatorMetadata.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(
    client: SuiClient,
    id: string,
  ): Promise<GenesisValidatorMetadata> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching GenesisValidatorMetadata object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isGenesisValidatorMetadata(res.data.bcs.type)
    ) {
      throw new Error(
        `object at id ${id} is not a GenesisValidatorMetadata object`,
      );
    }

    return GenesisValidatorMetadata.fromSuiObjectData(res.data);
  }
}
