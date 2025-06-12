import {
  PhantomReified,
  PhantomToTypeStr,
  PhantomTypeArgument,
  Reified,
  StructClass,
  ToField,
  ToPhantomTypeArgument,
  ToTypeStr,
  assertFieldsWithTypesArgsMatch,
  assertReifiedTypeArgsMatch,
  decodeFromFields,
  decodeFromFieldsWithTypes,
  decodeFromJSONField,
  extractType,
  phantom,
} from "../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
  parseTypeName,
} from "../../../_framework/util.js";
import { TypeName } from "../../../move-stdlib/type-name/structs/index.js";
import { PKG_V31 } from "../../constants.js";
import { ID } from "../../object/structs/index.js";
import { VecSet } from "../../vec-set/structs/index.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isTransferRequest(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(`${PKG_V31}::transfer_policy::TransferRequest` + "<");
}

export interface TransferRequestFields<T extends PhantomTypeArgument> {
  item: ToField<ID>;
  paid: ToField<"u64">;
  from: ToField<ID>;
  receipts: ToField<VecSet<TypeName>>;
}

export type TransferRequestReified<T extends PhantomTypeArgument> = Reified<
  TransferRequest<T>,
  TransferRequestFields<T>
>;

/**
 * Move struct: `TransferRequest`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::transfer_policy`
 *
 * @typeParam T - Type parameter 0 (phantom)
 */
export class TransferRequest<T extends PhantomTypeArgument> implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V31}::transfer_policy::TransferRequest`;
  static readonly $numTypeParams = 1;
  static readonly $isPhantom = [true] as const;

  readonly $typeName = TransferRequest.$typeName;
  readonly $fullTypeName: `${typeof PKG_V31}::transfer_policy::TransferRequest<${PhantomToTypeStr<T>}>`;
  readonly $typeArgs: [PhantomToTypeStr<T>];
  readonly $isPhantom = TransferRequest.$isPhantom;

  readonly item: ToField<ID>;
  readonly paid: ToField<"u64">;
  readonly from: ToField<ID>;
  readonly receipts: ToField<VecSet<TypeName>>;

  private constructor(typeArgs: [PhantomToTypeStr<T>], fields: TransferRequestFields<T>) {
    this.$fullTypeName = composeSuiType(
      TransferRequest.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V31}::transfer_policy::TransferRequest<${PhantomToTypeStr<T>}>`;
    this.$typeArgs = typeArgs;

    this.item = fields.item;
    this.paid = fields.paid;
    this.from = fields.from;
    this.receipts = fields.receipts;
  }

  static reified<T extends PhantomReified<PhantomTypeArgument>>(
    T: T,
  ): TransferRequestReified<ToPhantomTypeArgument<T>> {
    return {
      typeName: TransferRequest.$typeName,
      fullTypeName: composeSuiType(
        TransferRequest.$typeName,
        ...[extractType(T)],
      ) as `${typeof PKG_V31}::transfer_policy::TransferRequest<${PhantomToTypeStr<ToPhantomTypeArgument<T>>}>`,
      typeArgs: [extractType(T)] as [PhantomToTypeStr<ToPhantomTypeArgument<T>>],
      isPhantom: TransferRequest.$isPhantom,
      reifiedTypeArgs: [T],
      fromFields: (fields: Record<string, any>) => TransferRequest.fromFields(T, fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => TransferRequest.fromFieldsWithTypes(T, item),
      fromBcs: (data: Uint8Array) => TransferRequest.fromBcs(T, data),
      bcs: TransferRequest.bcs,
      fromJSONField: (field: any) => TransferRequest.fromJSONField(T, field),
      fromJSON: (json: Record<string, any>) => TransferRequest.fromJSON(T, json),
      fromSuiParsedData: (content: SuiParsedData) => TransferRequest.fromSuiParsedData(T, content),
      fromSuiObjectData: (content: SuiObjectData) => TransferRequest.fromSuiObjectData(T, content),
      fetch: async (client: SuiClient, id: string) => TransferRequest.fetch(client, T, id),
      new: (fields: TransferRequestFields<ToPhantomTypeArgument<T>>) => {
        return new TransferRequest([extractType(T)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return TransferRequest.reified;
  }

  static phantom<T extends PhantomReified<PhantomTypeArgument>>(
    T: T,
  ): PhantomReified<ToTypeStr<TransferRequest<ToPhantomTypeArgument<T>>>> {
    return phantom(TransferRequest.reified(T));
  }
  static get p() {
    return TransferRequest.phantom;
  }

  static get bcs() {
    return bcs.struct("TransferRequest", {
      item: ID.bcs,
      paid: bcs.u64(),
      from: ID.bcs,
      receipts: VecSet.bcs(TypeName.bcs),
    });
  }

  static fromFields<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    fields: Record<string, any>,
  ): TransferRequest<ToPhantomTypeArgument<T>> {
    return TransferRequest.reified(typeArg).new({
      item: decodeFromFields(ID.reified(), fields.item),
      paid: decodeFromFields("u64", fields.paid),
      from: decodeFromFields(ID.reified(), fields.from),
      receipts: decodeFromFields(VecSet.reified(TypeName.reified()), fields.receipts),
    });
  }

  static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    item: FieldsWithTypes,
  ): TransferRequest<ToPhantomTypeArgument<T>> {
    if (!isTransferRequest(item.type)) {
      throw new Error("not a TransferRequest type");
    }
    assertFieldsWithTypesArgsMatch(item, [typeArg]);

    return TransferRequest.reified(typeArg).new({
      item: decodeFromFieldsWithTypes(ID.reified(), item.fields.item),
      paid: decodeFromFieldsWithTypes("u64", item.fields.paid),
      from: decodeFromFieldsWithTypes(ID.reified(), item.fields.from),
      receipts: decodeFromFieldsWithTypes(VecSet.reified(TypeName.reified()), item.fields.receipts),
    });
  }

  static fromBcs<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    data: Uint8Array,
  ): TransferRequest<ToPhantomTypeArgument<T>> {
    return TransferRequest.fromFields(typeArg, TransferRequest.bcs.parse(data));
  }

  toJSONField() {
    return {
      item: this.item,
      paid: this.paid.toString(),
      from: this.from,
      receipts: this.receipts.toJSONField(),
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    field: any,
  ): TransferRequest<ToPhantomTypeArgument<T>> {
    return TransferRequest.reified(typeArg).new({
      item: decodeFromJSONField(ID.reified(), field.item),
      paid: decodeFromJSONField("u64", field.paid),
      from: decodeFromJSONField(ID.reified(), field.from),
      receipts: decodeFromJSONField(VecSet.reified(TypeName.reified()), field.receipts),
    });
  }

  static fromJSON<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    json: Record<string, any>,
  ): TransferRequest<ToPhantomTypeArgument<T>> {
    if (json.$typeName !== TransferRequest.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    assertReifiedTypeArgsMatch(
      composeSuiType(TransferRequest.$typeName, extractType(typeArg)),
      json.$typeArgs,
      [typeArg],
    );

    return TransferRequest.fromJSONField(typeArg, json);
  }

  static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    content: SuiParsedData,
  ): TransferRequest<ToPhantomTypeArgument<T>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isTransferRequest(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a TransferRequest object`);
    }
    return TransferRequest.fromFieldsWithTypes(typeArg, content);
  }

  static fromSuiObjectData<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    data: SuiObjectData,
  ): TransferRequest<ToPhantomTypeArgument<T>> {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isTransferRequest(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a TransferRequest object`);
      }

      const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs;
      if (gotTypeArgs.length !== 1) {
        throw new Error(
          `type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`,
        );
      }
      const gotTypeArg = gotTypeArgs[0] as string;
      const compressedGotType = compressSuiType(gotTypeArg);
      const expectedTypeArg = compressSuiType(extractType(typeArg));
      if (compressedGotType !== expectedTypeArg) {
        throw new Error(
          `type argument mismatch: expected '${expectedTypeArg}' but got '${compressedGotType}'`,
        );
      }

      return TransferRequest.fromBcs(typeArg, fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return TransferRequest.fromSuiParsedData(typeArg, data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch<T extends PhantomReified<PhantomTypeArgument>>(
    client: SuiClient,
    typeArg: T,
    id: string,
  ): Promise<TransferRequest<ToPhantomTypeArgument<T>>> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching TransferRequest object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isTransferRequest(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a TransferRequest object`);
    }

    return TransferRequest.fromSuiObjectData(typeArg, res.data);
  }
}
