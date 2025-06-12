import {
  PhantomReified,
  Reified,
  StructClass,
  ToField,
  ToTypeArgument,
  ToTypeStr,
  TypeArgument,
  assertFieldsWithTypesArgsMatch,
  assertReifiedTypeArgsMatch,
  decodeFromFields,
  decodeFromFieldsWithTypes,
  decodeFromJSONField,
  extractType,
  fieldToJSON,
  phantom,
  toBcs,
} from "../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
  parseTypeName,
} from "../../../_framework/util.js";
import { Option } from "../../../move-stdlib-chain/option/structs/index.js";
import { PKG_V31 } from "../../constants.js";
import { BcsType, bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isNode(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(`${PKG_V31}::linked_table::Node` + "<");
}

export interface NodeFields<T0 extends TypeArgument, T1 extends TypeArgument> {
  prev: ToField<Option<T0>>;
  next: ToField<Option<T0>>;
  value: ToField<T1>;
}

export type NodeReified<T0 extends TypeArgument, T1 extends TypeArgument> = Reified<
  Node<T0, T1>,
  NodeFields<T0, T1>
>;

/**
 * Move struct: `Node`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::linked_table`
 *
 * @typeParam T0 - Type parameter 0
 * @typeParam T1 - Type parameter 1
 */
export class Node<T0 extends TypeArgument, T1 extends TypeArgument> implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V31}::linked_table::Node`;
  static readonly $numTypeParams = 2;
  static readonly $isPhantom = [false, false] as const;

  readonly $typeName = Node.$typeName;
  readonly $fullTypeName: `${typeof PKG_V31}::linked_table::Node<${ToTypeStr<T0>}, ${ToTypeStr<T1>}>`;
  readonly $typeArgs: [ToTypeStr<T0>, ToTypeStr<T1>];
  readonly $isPhantom = Node.$isPhantom;

  readonly prev: ToField<Option<T0>>;
  readonly next: ToField<Option<T0>>;
  readonly value: ToField<T1>;

  private constructor(typeArgs: [ToTypeStr<T0>, ToTypeStr<T1>], fields: NodeFields<T0, T1>) {
    this.$fullTypeName = composeSuiType(
      Node.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V31}::linked_table::Node<${ToTypeStr<T0>}, ${ToTypeStr<T1>}>`;
    this.$typeArgs = typeArgs;

    this.prev = fields.prev;
    this.next = fields.next;
    this.value = fields.value;
  }

  static reified<T0 extends Reified<TypeArgument, any>, T1 extends Reified<TypeArgument, any>>(
    T0: T0,
    T1: T1,
  ): NodeReified<ToTypeArgument<T0>, ToTypeArgument<T1>> {
    return {
      typeName: Node.$typeName,
      fullTypeName: composeSuiType(
        Node.$typeName,
        ...[extractType(T0), extractType(T1)],
      ) as `${typeof PKG_V31}::linked_table::Node<${ToTypeStr<ToTypeArgument<T0>>}, ${ToTypeStr<ToTypeArgument<T1>>}>`,
      typeArgs: [extractType(T0), extractType(T1)] as [
        ToTypeStr<ToTypeArgument<T0>>,
        ToTypeStr<ToTypeArgument<T1>>,
      ],
      isPhantom: Node.$isPhantom,
      reifiedTypeArgs: [T0, T1],
      fromFields: (fields: Record<string, any>) => Node.fromFields([T0, T1], fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => Node.fromFieldsWithTypes([T0, T1], item),
      fromBcs: (data: Uint8Array) => Node.fromBcs([T0, T1], data),
      bcs: Node.bcs(toBcs(T0), toBcs(T1)),
      fromJSONField: (field: any) => Node.fromJSONField([T0, T1], field),
      fromJSON: (json: Record<string, any>) => Node.fromJSON([T0, T1], json),
      fromSuiParsedData: (content: SuiParsedData) => Node.fromSuiParsedData([T0, T1], content),
      fromSuiObjectData: (content: SuiObjectData) => Node.fromSuiObjectData([T0, T1], content),
      fetch: async (client: SuiClient, id: string) => Node.fetch(client, [T0, T1], id),
      new: (fields: NodeFields<ToTypeArgument<T0>, ToTypeArgument<T1>>) => {
        return new Node([extractType(T0), extractType(T1)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return Node.reified;
  }

  static phantom<T0 extends Reified<TypeArgument, any>, T1 extends Reified<TypeArgument, any>>(
    T0: T0,
    T1: T1,
  ): PhantomReified<ToTypeStr<Node<ToTypeArgument<T0>, ToTypeArgument<T1>>>> {
    return phantom(Node.reified(T0, T1));
  }
  static get p() {
    return Node.phantom;
  }

  static get bcs() {
    return <T0 extends BcsType<any>, T1 extends BcsType<any>>(T0: T0, T1: T1) =>
      bcs.struct(`Node<${T0.name}, ${T1.name}>`, {
        prev: Option.bcs(T0),
        next: Option.bcs(T0),
        value: T1,
      });
  }

  static fromFields<T0 extends Reified<TypeArgument, any>, T1 extends Reified<TypeArgument, any>>(
    typeArgs: [T0, T1],
    fields: Record<string, any>,
  ): Node<ToTypeArgument<T0>, ToTypeArgument<T1>> {
    const [typeArg0, typeArg1] = typeArgs;
    return Node.reified(typeArg0, typeArg1).new({
      prev: decodeFromFields(Option.reified(typeArg0), fields.prev),
      next: decodeFromFields(Option.reified(typeArg0), fields.next),
      value: decodeFromFields(typeArg1, fields.value),
    });
  }

  static fromFieldsWithTypes<
    T0 extends Reified<TypeArgument, any>,
    T1 extends Reified<TypeArgument, any>,
  >(typeArgs: [T0, T1], item: FieldsWithTypes): Node<ToTypeArgument<T0>, ToTypeArgument<T1>> {
    if (!isNode(item.type)) {
      throw new Error("not a Node type");
    }
    const [typeArg0, typeArg1] = typeArgs;
    assertFieldsWithTypesArgsMatch(item, typeArgs);

    return Node.reified(typeArg0, typeArg1).new({
      prev: decodeFromFieldsWithTypes(Option.reified(typeArg0), item.fields.prev),
      next: decodeFromFieldsWithTypes(Option.reified(typeArg0), item.fields.next),
      value: decodeFromFieldsWithTypes(typeArg1, item.fields.value),
    });
  }

  static fromBcs<T0 extends Reified<TypeArgument, any>, T1 extends Reified<TypeArgument, any>>(
    typeArgs: [T0, T1],
    data: Uint8Array,
  ): Node<ToTypeArgument<T0>, ToTypeArgument<T1>> {
    const [typeArg0, typeArg1] = typeArgs;
    return Node.fromFields(
      [typeArg0, typeArg1],
      Node.bcs(toBcs(typeArg0), toBcs(typeArg1)).parse(data),
    );
  }

  toJSONField() {
    const [typeArg0, typeArg1] = this.$typeArgs;
    return {
      prev: fieldToJSON<Option<T0>>(`${Option.$typeName}<${typeArg0}>`, this.prev),
      next: fieldToJSON<Option<T0>>(`${Option.$typeName}<${typeArg0}>`, this.next),
      value: fieldToJSON<T1>(typeArg1, this.value),
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField<
    T0 extends Reified<TypeArgument, any>,
    T1 extends Reified<TypeArgument, any>,
  >(typeArgs: [T0, T1], field: any): Node<ToTypeArgument<T0>, ToTypeArgument<T1>> {
    const [typeArg0, typeArg1] = typeArgs;
    return Node.reified(typeArg0, typeArg1).new({
      prev: decodeFromJSONField(Option.reified(typeArg0), field.prev),
      next: decodeFromJSONField(Option.reified(typeArg0), field.next),
      value: decodeFromJSONField(typeArg1, field.value),
    });
  }

  static fromJSON<T0 extends Reified<TypeArgument, any>, T1 extends Reified<TypeArgument, any>>(
    typeArgs: [T0, T1],
    json: Record<string, any>,
  ): Node<ToTypeArgument<T0>, ToTypeArgument<T1>> {
    if (json.$typeName !== Node.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    const [typeArg0, typeArg1] = typeArgs;
    assertReifiedTypeArgsMatch(
      composeSuiType(Node.$typeName, ...[typeArg0, typeArg1].map(extractType)),
      json.$typeArgs,
      [typeArg0, typeArg1],
    );

    return Node.fromJSONField([typeArg0, typeArg1], json);
  }

  static fromSuiParsedData<
    T0 extends Reified<TypeArgument, any>,
    T1 extends Reified<TypeArgument, any>,
  >(typeArgs: [T0, T1], content: SuiParsedData): Node<ToTypeArgument<T0>, ToTypeArgument<T1>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isNode(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a Node object`);
    }
    return Node.fromFieldsWithTypes(typeArgs, content);
  }

  static fromSuiObjectData<
    T0 extends Reified<TypeArgument, any>,
    T1 extends Reified<TypeArgument, any>,
  >(typeArgs: [T0, T1], data: SuiObjectData): Node<ToTypeArgument<T0>, ToTypeArgument<T1>> {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isNode(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a Node object`);
      }

      const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs;
      if (gotTypeArgs.length !== 2) {
        throw new Error(
          `type argument mismatch: expected 2 type arguments but got ${gotTypeArgs.length}`,
        );
      }
      gotTypeArgs.forEach((gotTypeArg, i) => {
        const compressedGotType = compressSuiType(gotTypeArg);
        const typeArg = typeArgs[i];
        if (!typeArg) {
          throw new Error(`missing type argument at position ${i}`);
        }
        const expectedTypeArg = compressSuiType(extractType(typeArg));
        if (compressedGotType !== expectedTypeArg) {
          throw new Error(
            `type argument mismatch at position ${i}: expected '${expectedTypeArg}' but got '${compressedGotType}'`,
          );
        }
      });

      return Node.fromBcs(typeArgs, fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return Node.fromSuiParsedData(typeArgs, data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch<T0 extends Reified<TypeArgument, any>, T1 extends Reified<TypeArgument, any>>(
    client: SuiClient,
    typeArgs: [T0, T1],
    id: string,
  ): Promise<Node<ToTypeArgument<T0>, ToTypeArgument<T1>>> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching Node object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isNode(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a Node object`);
    }

    return Node.fromSuiObjectData(typeArgs, res.data);
  }
}
